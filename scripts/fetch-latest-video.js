// Resolves the single most recent long-form (non-Short) video across two YouTube
// channels and writes it to data/latest_video.json for the link-in-bio page.
// Runs at build time (see netlify.toml). Never throws past its own boundary —
// if both feeds fail or nothing qualifies, it leaves no file, and the Hugo
// template falls back to the most recent blog post with a youtube_id.

const fs = require("fs");
const path = require("path");

const CHANNEL_IDS = [
  "UCvPccybgk6_FZMMSAyEQ4Wg", // @AutomationMaestro
  "UCEyM6FIeF1FnsVMLbMcYvbw", // @ABInvests
];

const CANDIDATES_PER_CHANNEL = 5; // how many of each channel's newest uploads to consider before giving up

function decodeXmlEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function fetchFeed(channelId) {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Feed fetch failed for ${channelId}: ${res.status}`);
  const xml = await res.text();

  const entries = [];
  const entryBlocks = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  for (const block of entryBlocks) {
    const videoId = (block.match(/<yt:videoId>(.*?)<\/yt:videoId>/) || [])[1];
    const published = (block.match(/<published>(.*?)<\/published>/) || [])[1];
    const title = (block.match(/<title>(.*?)<\/title>/) || [])[1];
    if (videoId && published) {
      entries.push({ videoId, published, title: title ? decodeXmlEntities(title) : "" });
    }
  }

  // YouTube's feed is already newest-first, but sort defensively.
  entries.sort((a, b) => new Date(b.published) - new Date(a.published));
  return entries.slice(0, CANDIDATES_PER_CHANNEL);
}

async function isShort(videoId) {
  // YouTube's oEmbed endpoint always returns a fixed 200x113 size regardless of
  // actual aspect ratio, so it can't distinguish Shorts. Instead: requesting
  // /shorts/{id} stays on the Shorts page (200) for an actual Short, but
  // redirects to /watch?v=... for a standard upload.
  const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
    redirect: "manual",
  });
  if (res.status >= 300 && res.status < 400) return false; // redirected away from /shorts/ -> long-form
  if (res.status === 200) return true; // stayed on /shorts/ -> actual Short
  return null; // unknown (e.g. private/deleted) — treat as disqualified by caller
}

async function main() {
  const dataDir = path.join(__dirname, "..", "data");
  const outFile = path.join(dataDir, "latest_video.json");

  let allCandidates = [];
  for (const channelId of CHANNEL_IDS) {
    try {
      const entries = await fetchFeed(channelId);
      allCandidates.push(...entries);
    } catch (err) {
      console.warn(`[fetch-latest-video] ${err.message}`);
    }
  }

  if (allCandidates.length === 0) {
    console.warn("[fetch-latest-video] No candidates from either channel; falling back to blog post logic.");
    return;
  }

  allCandidates.sort((a, b) => new Date(b.published) - new Date(a.published));

  for (const candidate of allCandidates) {
    let short;
    try {
      short = await isShort(candidate.videoId);
    } catch (err) {
      console.warn(`[fetch-latest-video] oEmbed check failed for ${candidate.videoId}: ${err.message}`);
      continue;
    }
    if (short === null) continue; // couldn't verify, skip rather than risk showing a Short
    if (short) continue;

    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(
      outFile,
      JSON.stringify(
        { video_id: candidate.videoId, title: candidate.title, published: candidate.published },
        null,
        2
      )
    );
    console.log(`[fetch-latest-video] Wrote ${outFile}: ${candidate.videoId} (${candidate.published})`);
    return;
  }

  console.warn("[fetch-latest-video] No qualifying long-form video found; falling back to blog post logic.");
}

main().catch((err) => {
  console.warn(`[fetch-latest-video] Unexpected error, falling back to blog post logic: ${err.message}`);
});

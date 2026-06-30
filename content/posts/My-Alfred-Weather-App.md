---
title: "My Alfred Weather App"
description: "I built a custom Alfred weather workflow using a Python script and a free weather API — get current conditions and forecasts right from Alfred without opening a browser."
date: 2024-02-18
url: /My-Alfred-Weather-App/
image: /img/weatherapp.webp
categories:
  - My Apps
tags:
  - Alfred Workflow
  - Automation
  - Python Script
draft: False
youtube_id: "0UMttQ4ajvM"
---

## Video
{{< youtube 0UMttQ4ajvM >}}

## The Weather App

My latest project is a streamlined weather tool driven by Python and triggered through an Alfred workflow. It's more than just another weather app — it's a practical example of using a bit of programming to solve a real, everyday need. The goal was simple: I wanted to glance at the current conditions in several specific cities around the world at once, without opening a weather app, scrolling through locations, or dealing with ads and clutter. A quick Alfred keyword, and the conditions for all my chosen cities appear instantly.

What I like about this project is how it grew. It started with a modest goal — show the current temperature in a few cities in both Fahrenheit and Celsius — and naturally expanded from there to include the local time and date for each location and clean, readable formatting with country flags. That progression is a nice illustration of how a small idea, once it's working, tends to invite "wouldn't it be cool if…" additions. Because it's built on a script you control, extending it is easy.

The app reports the current time, date, weather condition, and temperature for each city, showing both Fahrenheit and Celsius so it works no matter which unit you think in. (In the video, I've blurred out a couple of my personal locations for privacy — you'll plug in your own cities.) The whole thing is a good demonstration of how a little Python, combined with an AI assistant like ChatGPT to help write and refine the code, can turn into a genuinely useful daily tool.

## How the Script Works

Before the code, here's the gist of what it does. It loops through a list of cities you define, calls a weather API for each one to get current conditions, figures out the correct local time for that city based on its coordinates, converts the temperature into both units, and prints a tidy one-line report per city — complete with a flag emoji so you can tell them apart at a glance.

A few things you'll need to make it run on your own machine: the **OpenWeatherMap API** (you sign up for a free API key and drop it into the script where I've marked it `Removed`), and three Python libraries — `requests` for the API call, `pytz` for time zones, and `timezonefinder` for converting coordinates into a time zone. You can install those with `pip`. Once your API key and your city list are in place, the script is ready to go.

## The Script

```Python
#!/usr/bin/env python3
import requests
import datetime
import pytz
from timezonefinder import TimezoneFinder

def get_local_time(city, country_code):
    # Get current time in UTC
    now_utc = datetime.datetime.utcnow()
    tf = TimezoneFinder()

    # Find time zone of the given location
    timezone_str = tf.timezone_at(lng=city['coord']['lon'], lat=city['coord']['lat'])
    if timezone_str is None:
        # Default to UTC if time zone is not found
        timezone_str = 'UTC'
    timezone = pytz.timezone(timezone_str)

    # Convert current time to local time
    local_time = now_utc.replace(tzinfo=pytz.utc).astimezone(timezone)
    return local_time.strftime("%A, %I:%M %p")  # Format: Day of week, HH:MM AM/PM

def get_weather(location, flag_emojis):
    country_code = location.split(",")[-1]
    flag = flag_emojis.get(country_code, "")  # Get flag emoji or empty string if not found

    api_key = "Removed"
    url = f"Removed"

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        local_time = get_local_time(data, country_code)
        weather = data['weather'][0]['main']
        temp_celsius = data['main']['temp']
        temp_fahrenheit = (temp_celsius * 9/5) + 32
        return f"{flag} {location} ({local_time}): {weather}, {round(temp_celsius, 2)}°C | {round(temp_fahrenheit, 2)} °F"
    else:
        return f"{flag} Error in {location}"

def main():
    locations = [
        "removed",
        "Jeddah,SA",
        "Mansoura,EG"
    ]

    flag_emojis = {
        "US": "🇺🇸",
        "SA": "🇸🇦",
        "EG": "🇪🇬",
        # Add more mappings as needed
    }

    weather_reports = [get_weather(location, flag_emojis) for location in locations]
    for report in weather_reports:
        print(report)

if __name__ == "__main__":
    main()

```

## Wiring It Into Alfred

The Python script is the engine, and Alfred is the ignition. To turn it into an instant command, create an Alfred workflow with a **Keyword** trigger (something like `wx`) connected to a **Run Script** action that runs the Python file. Make sure the action is set to run with Python 3, and point it at wherever you've saved the script. From then on, summoning Alfred and typing your keyword runs the script and shows your multi-city weather report right in Alfred. You can route the output to Alfred's Large Type or a notification if you'd like it even more glanceable.

## Making It Your Own

The best part of building your own tool is that it bends to your needs. To customize it, edit the `locations` list with the cities you care about (using the `City,CountryCode` format), and add matching entries to the `flag_emojis` dictionary so each one shows the right flag. You could extend it further to show humidity, wind, or a multi-day forecast — the OpenWeatherMap API returns plenty of data, and adding a field is just a small tweak to the script. This is exactly the kind of project where leaning on ChatGPT helps: describe the new field you want, and let it help you slot it into the existing code.

## Conclusion

This little weather app is a great example of how a bit of Python plus an Alfred workflow can replace a cluttered, ad-filled app with something fast, private, and tailored exactly to you. With one keyword you get the time, date, and temperature for all your chosen cities in both Fahrenheit and Celsius. If you want to build your own, remember the prerequisites: sign up for a free OpenWeatherMap API key, install the required Python libraries (`requests`, `pytz`, and `timezonefinder`) with `pip`, drop in your own cities, and wire it to an Alfred keyword. Once it's set up, your personalized weather report is always just a couple of keystrokes away.
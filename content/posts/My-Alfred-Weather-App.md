---
title: "My Alfred Weather App"
description: "The app I created for custom weather information."
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
---

## Video
{{< youtube 0UMttQ4ajvM >}}

## The Weather App
My latest project introduces a streamlined weather application, driven by Python and integrated with an Alfred workflow. This application isn't just another tool; it's a practical demonstration of applying programming skills to solve real-world problems. By leveraging Python, this project aims to deliver a user-friendly experience for accessing weather information.

Starting with the goal to display current temperatures in cities worldwide in both Fahrenheit and Celsius, the project expanded to include more features. This progression highlights the adaptability and scalability of the initial concept, demonstrating how a simple idea can evolve into a more comprehensive application.

The app provides the current time, date, and temperature, catering to user preferences for Fahrenheit or Celsius. Privacy is also considered, with personal data like city names blurred out. This approach ensures that users receive necessary information without extra data that may not be useful to them.

This Python-based weather app, enhanced by Alfred workflow integration, illustrates the power of combining programming skills ChatGPT with practical applications. It's an example of how technology can be used to create solutions that are useful. Below is the script.

## the script

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

## Conclusion
 When using this Python script, be sure to download the proper Python libraries to make it work.
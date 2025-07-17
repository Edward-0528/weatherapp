import React, { useEffect, useState } from 'react';
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiFog,
  WiSprinkle,
  WiRain,
  WiShowers,
  WiSnow,
  WiThunderstorm,
  WiNA
} from 'weather-icons-react';
import './App.css';

function getIconMeteo(code) {
  const map = {
    0: WiDaySunny,
    1: WiDayCloudy,
    2: WiCloud,
    3: WiCloudy,
    45: WiFog,
    48: WiFog,
    51: WiSprinkle,
    53: WiSprinkle,
    55: WiSprinkle,
    56: WiRain,
    57: WiRain,
    61: WiRain,
    63: WiRain,
    65: WiRain,
    66: WiRain,
    67: WiRain,
    71: WiSnow,
    73: WiSnow,
    75: WiSnow,
    77: WiSnow,
    80: WiShowers,
    81: WiShowers,
    82: WiShowers,
    85: WiSnow,
    86: WiSnow,
    95: WiThunderstorm,
    96: WiThunderstorm,
    99: WiThunderstorm,
  };
  return map[code] || WiNA;
}

function getWeatherMessage(weatherCode, tempF) {
  const temp = parseFloat(tempF);
  
  const messages = {
    // Clear/Sunny
    0: [
      "What a beautiful day to soak up some sunshine!",
      "Perfect weather for a walk in the park.",
      "The sun is shining bright - don't forget your sunglasses!",
      "Great day to spend time outdoors and enjoy nature."
    ],
    
    // Partly cloudy
    1: [
      "A lovely mix of sun and clouds today.",
      "Perfect weather for any outdoor activities.",
      "The clouds are adding character to this beautiful day.",
      "Ideal conditions for a pleasant day outside."
    ],
    
    // Cloudy
    2: [
      "The clouds are putting on quite a show today.",
      "A cozy day with overcast skies.",
      "Perfect weather for a leisurely indoor day.",
      "The gray skies create a peaceful atmosphere."
    ],
    3: [
      "Overcast skies call for a warm cup of coffee.",
      "A great day to curl up with a good book.",
      "The cloudy weather creates a calm, serene mood.",
      "Perfect excuse to stay cozy indoors."
    ],
    
    // Fog
    45: [
      "Drive carefully - visibility might be limited today.",
      "The fog creates a mysterious, dreamy atmosphere.",
      "Take it slow if you're heading out in this fog.",
      "A mystical start to the day with all this fog."
    ],
    48: [
      "Extra caution needed with this heavy fog.",
      "The world looks like a fairytale in this fog.",
      "Drive with your headlights on in this weather.",
      "The fog makes everything look magical today."
    ],
    
    // Light rain/drizzle
    51: [
      "A light drizzle calls for a light jacket.",
      "Perfect weather for the sound of gentle rain.",
      "The light rain is giving everything a fresh wash.",
      "A peaceful drizzle to start the day."
    ],
    53: [
      "Don't forget an umbrella for this light rain.",
      "The gentle rain creates a soothing soundtrack.",
      "A refreshing shower is blessing the earth today.",
      "Light rain means fresh air and clean streets."
    ],
    55: [
      "An umbrella would be your best friend today.",
      "The steady drizzle calls for cozy indoor plans.",
      "Perfect weather for listening to rain from inside.",
      "Mother nature is giving everything a gentle rinse."
    ],
    
    // Rain
    56: [
      "Don't forget your umbrella - it's going to be wet!",
      "Rain boots might come in handy today.",
      "Perfect weather for splashing in puddles.",
      "The rain is nature's way of watering the garden."
    ],
    57: [
      "Definitely grab that umbrella before heading out!",
      "A good day to appreciate the sound of rain.",
      "The plants are loving this natural watering.",
      "Rain gear recommended for any outdoor adventures."
    ],
    61: [
      "Don't forget your umbrella - steady rain expected!",
      "Perfect weather for a cozy day indoors.",
      "The rain is washing the world clean today.",
      "Great day for hot chocolate and good company."
    ],
    63: [
      "You'll want that umbrella and maybe rain boots too!",
      "The rain is putting on quite a performance today.",
      "Perfect excuse to stay in and relax.",
      "The steady rainfall creates a peaceful rhythm."
    ],
    65: [
      "Heavy rain alert - waterproof gear essential!",
      "Stay dry out there with proper rain protection.",
      "The rain is really coming down - plan accordingly.",
      "Perfect weather for appreciating a warm, dry home."
    ],
    
    // Snow
    71: [
      "Light snow is painting the world white today.",
      "Drive carefully on potentially slippery roads.",
      "The first snowflakes of winter are here!",
      "Bundle up warm for this snowy weather."
    ],
    73: [
      "Moderate snow calls for extra warm layers.",
      "Perfect weather for building a snowman!",
      "The snow is creating a winter wonderland.",
      "Don't forget your gloves and warm boots."
    ],
    75: [
      "Heavy snow - stay warm and drive carefully!",
      "Perfect day for hot cocoa by the fireplace.",
      "The snow is really accumulating out there.",
      "Bundle up well if you're venturing outside."
    ],
    
    // Showers
    80: [
      "Scattered showers - keep an umbrella handy!",
      "The weather can't make up its mind today.",
      "Perfect excuse to carry a cute umbrella.",
      "Intermittent rain calls for flexible plans."
    ],
    81: [
      "Heavy showers expected - stay prepared!",
      "The rain is coming in waves today.",
      "Perfect weather for watching storms from inside.",
      "Don't get caught without rain protection."
    ],
    
    // Thunderstorms
    95: [
      "Thunderstorms brewing - stay safe indoors!",
      "Nature's putting on an electric light show today.",
      "Perfect weather for appreciating nature's power.",
      "The thunder reminds us to respect the weather."
    ],
    96: [
      "Severe thunderstorms - seek shelter when needed!",
      "The sky is putting on quite a dramatic display.",
      "Stay safe and enjoy the thunder from inside.",
      "Mother nature is showing her mighty side today."
    ]
  };
  
  // Get messages for the weather code, fallback to general messages
  let weatherMessages = messages[weatherCode] || [
    "Every day brings its own kind of beauty.",
    "Make the most of whatever weather comes your way.",
    "The weather adds character to each day.",
    "Nature always has something special in store."
  ];
  
  // Add temperature-based messages
  if (temp > 85) {
    weatherMessages = [
      "Stay cool and hydrated in this warm weather!",
      "Perfect day for ice cream and cold drinks.",
      "The heat calls for light, breathable clothing.",
      "Find some shade and enjoy the summer warmth."
    ];
  } else if (temp < 32) {
    weatherMessages = [
      "Bundle up warm - it's quite chilly out there!",
      "Perfect weather for hot soup and warm blankets.",
      "Don't forget your winter coat and gloves.",
      "The cold air is crisp and refreshing today."
    ];
  }
  
  // Return a random message from the appropriate array
  return weatherMessages[Math.floor(Math.random() * weatherMessages.length)];
}

export default function App() {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');
  const [showWeekly, setShowWeekly] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setShowWeekly(!showWeekly);
      setIsAnimating(false);
    }, 600); // Half of the animation duration (1200ms / 2)
  };

  useEffect(() => {
    setWeatherError(false);
    setWeather(null);
    setLocation('');
    setState('');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          // Fetch weather for geolocation
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,weathercode&timezone=auto`);
          const weatherData = await weatherRes.json();
          setWeather(weatherData);
          // Reverse geocode for city name
          const locRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const locData = await locRes.json();
          setLocation(locData.address.city || locData.address.town || locData.address.village || 'Your Location');
          setState(locData.address.state || '');
        } catch (err) {
          setWeatherError(true);
        }
      }, () => {
        setWeatherError(true);
      });
    }
  }, []);

  // Safely extract temperature
  const tempF = weather && weather.current_weather && typeof weather.current_weather.temperature === 'number'
    ? Math.round(weather.current_weather.temperature * 9/5 + 32)
    : '--';

  // Hourly forecast - start from current hour
  const currentHour = new Date().getHours();
  const hourlyTemps = weather && weather.hourly && weather.hourly.temperature_2m ? weather.hourly.temperature_2m.slice(currentHour, currentHour + 5) : [];
  const hourlyCodes = weather && weather.hourly && weather.hourly.weathercode ? weather.hourly.weathercode.slice(currentHour, currentHour + 5) : [];
  const hourlyTimes = weather && weather.hourly && weather.hourly.time ? weather.hourly.time.slice(currentHour, currentHour + 5) : [];

  // Weekly forecast
  const weeklyTemps = weather && weather.daily && weather.daily.temperature_2m_max ? weather.daily.temperature_2m_max.slice(0, 5) : [];
  const weeklyCodes = weather && weather.daily && weather.daily.weathercode ? weather.daily.weathercode.slice(0, 5) : [];
  const weeklyTimes = weather && weather.daily && weather.daily.time ? weather.daily.time.slice(0, 5) : [];

  return (
    <div className="weather-app">
      {/* AI-generated weather message */}
      {weather && !weatherError && (
        <div className="weather-message">
          <em>"{getWeatherMessage(weather?.current_weather?.weathercode, tempF)}"</em>
        </div>
      )}
      
      <div className="weather-header">
        <div className="weather-date">{new Date().toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <div className="weather-location">{location}</div>
        {state && <div className="weather-state">{state}</div>}
      </div>
      <div className="weather-main">
        {weatherError ? (
          <span style={{ color: '#b00', fontWeight: 200 }}>Could not load weather.</span>
        ) : (
          <>
            {/* Current weather icon */}
            {(() => {
              const CurrentIcon = getIconMeteo(weather?.current_weather?.weathercode);
              return CurrentIcon && <CurrentIcon size={140} color="#222" style={{ marginBottom: 10 }} />;
            })()}
            <span className="weather-temp">{tempF}°F</span>
          </>
        )}
      </div>
      {/* Toggle Button */}
      <button 
        className="toggle-forecast-btn"
        onClick={handleToggle}
      >
        {showWeekly ? 'Show Hourly Forecast' : 'Show Weekly Forecast'}
      </button>
      
      {/* Hourly Forecast */}
      {!showWeekly && hourlyTemps.length > 0 && hourlyCodes.length > 0 && hourlyTimes.length > 0 && (
        <div className={`weather-hourly forecast-container ${isAnimating ? 'fade-out' : ''}`}>
          {hourlyTemps.map((temp, i) => {
            const Icon = getIconMeteo(hourlyCodes[i]);
            return (
              <div key={i} className="weather-hour" style={{ fontWeight: 200, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                <span style={{ fontSize: '0.95rem', marginBottom: 2 }}>{new Date(hourlyTimes[i]).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</span>
                {/* Hourly forecast icon */}
                {Icon && <Icon size={32} color="#222" style={{ marginBottom: 2 }} />}
                <span style={{ fontSize: '1.1rem', fontWeight: 200 }}>{Math.round(temp * 9/5 + 32)}°F</span>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Weekly Forecast */}
      {showWeekly && weeklyTemps.length > 0 && weeklyCodes.length > 0 && weeklyTimes.length > 0 && (
        <div className={`weather-hourly forecast-container ${isAnimating ? 'fade-out' : ''}`}>
          {weeklyTemps.map((temp, i) => {
            const Icon = getIconMeteo(weeklyCodes[i]);
            return (
              <div key={i} className="weather-hour" style={{ fontWeight: 200, fontSize: '1rem', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                <span style={{ fontSize: '0.95rem', marginBottom: 2 }}>{new Date(weeklyTimes[i]).toLocaleDateString([], { weekday: 'short' })}</span>
                {/* Weekly forecast icon */}
                {Icon && <Icon size={32} color="#222" style={{ marginBottom: 2 }} />}
                <span style={{ fontSize: '1.1rem', fontWeight: 200 }}>{Math.round(temp * 9/5 + 32)}°F</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

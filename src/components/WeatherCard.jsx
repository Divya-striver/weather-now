function WeatherCard({ weather }) {
  const weatherConditions = {
    0: "Clear Sky ☀️",
    1: "Mainly Clear 🌤️",
    2: "Partly Cloudy ⛅",
    3: "Overcast ☁️",
    61: "Rain 🌧️",
    71: "Snow ❄️",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6 w-80 text-center">
      <h2 className="text-xl font-bold mb-2">{weather.city}</h2>
      <p className="text-4xl font-semibold">{weather.temp}°C</p>
      <p className="mt-2">
        {weatherConditions[weather.code] || "Unknown Weather"}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        💨 Wind: {weather.wind} km/h
      </p>
    </div>
  );
}

export default WeatherCard;
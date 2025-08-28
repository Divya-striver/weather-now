🌦️ Weather-Now

Weather-Now is a simple and responsive weather application built with *React + Vite*.  
It fetches real-time weather data from the *OpenWeatherMap API* and displays temperature, humidity, wind speed, and weather conditions for any city worldwide.

---

## 🚀 Features

- 🌍 Search weather by *city name*
- 📡 Real-time weather data using *Open-meteo API*
- 🌡️ Displays:
  - city name 
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (m/s or km/h)
- 🎨 Responsive design for desktop and mobile
- ⚡ Built with *React + Vite* for fast performance

---

## 🛠️ Tech Stack

- *Frontend:* React (Vite, JSX, CSS)
- *API:* [Open-Meteo API](https://open-meteo.com/)
- *Deployment:* GitHub Pages

---

## 📂 Project Structure

```bash
weather-now/
│── public/                                                                     # Static files
│── src/
│   ├── App.jsx        # Main app component
│   ├── App.css        # Styling
│   ├── main.jsx       # Entry point
│   ├── components/    # Reusable UI components
│   └── assets/        # Images/icons
│── package.json
│── vite.config.js
│── README.md


weather-now/
 ├─ node_modules/
 ├─ public/
 ├─ src/                              # Static files
 │    ├─ assets/                        # Images/icons
 │    ├─ components/                    # Reusable UI components
 │    │    ├─ SearchBar.jsx
 │    │    └─ WeatherCard.jsx
 │    ├─ App.jsx                      # Main app component
 │    ├─ App.css                       # Styling
 │    ├─ index.css
 │    └─ main.jsx                       # Entry point
 │── .gitignore
 │── README.md
 │── index.html
 ├─ package.json
 ├─ package-lock.json
 └─ vite.config.js


---

🔑 Setup Instructions

1. Clone the repo

git clone https://github.com/Divya-striver/weather-now.git
cd weather-now


2. Install dependencies

npm install


3. Get your API key

Copy your API key



4. Create a .env file in the root folder:

VITE_API_KEY=your_api_key_here


5. Run the app

npm run dev

Open http://localhost:5173 in your browser 🚀

🌦️ Weather-Now

Weather-Now is a simple and responsive weather application built with *React + Vite*.  
It fetches real-time weather data from the *open-Meteo API* and displays city name,temperature, humidity, wind speed for any city worldwide.

Check out the live Weather Now app here: [Live Demo] ( https://weather-now-snowy.vercel.app )

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
- *Deployment:* vercel platform

---

## 📂 Project Structure

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

3. Run the app

npm run dev

Open http://localhost:5173 in your browser 🚀

##Deployment
used vercel platform to deploy this project.


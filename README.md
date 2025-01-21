### Weather App README

---

#### **Project Overview**
This project is a **Weather App** built using React.js. It fetches current weather conditions and a 5-day forecast for a specified city using the OpenWeatherMap API. Users can enter the city name to retrieve temperature, weather conditions, wind speed, humidity, and an extended forecast.

---

#### **Features**
- Fetch current weather conditions for a specified city.
- Display temperature in both Celsius and Fahrenheit.
- Show weather details like wind speed and humidity.
- Present a 5-day weather forecast.
- Error handling for invalid city names or failed API calls.

---
#### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Application**
   ```bash
   npm start
   ```
   The app will be accessible at `http://localhost:3000`.

---

#### **Usage**
1. Enter the name of a city in the search bar.
2. Click the **Search** button to fetch weather data.
3. View the current weather conditions and forecast.

---

#### **API Integration**
This app uses the OpenWeatherMap API to fetch weather data:
- **Current Weather API:**  
  `http://api.openweathermap.org/data/2.5/weather?q={City}&appid={ApiKey}&units=metric`
- **Forecast API:**  
  `http://api.openweathermap.org/data/2.5/forecast?q={City}&appid={ApiKey}`

---

#### **Configuration**
Replace the placeholder API key in the `fetchWeather` function with your OpenWeatherMap API key:
```javascript
const ApiKey = "YOUR_API_KEY";
```

---

#### **Customization**
- **Styling:** Update `App.css` for custom styles.
- **Forecast Display:** Modify the `WeatherForecast` component in `/components/forecast.js` to change how forecast data is presented.

---

#### **Error Handling**
If an invalid city name is entered or the API fails:
- An error message is displayed: `"City not found"` or another relevant error message.

---

#### **Future Improvements**
- Add geolocation support for fetching weather based on user location.
- Enhance the UI with more animations and responsive design.
- Include additional weather metrics like sunrise, sunset, and air quality.

---

#### **Dependencies**
- React.js
- OpenWeatherMap API
- Fetch API (built into modern browsers)

---


Enjoy exploring the weather! 🌦️

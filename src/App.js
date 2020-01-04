import React from 'react';
import './App.css';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';
class App extends React.Component {
  state = {
    icon: " ",
    city: " ",
    temperature: " ",
    weatherCode: " ",
    fetching: false
  }
  componentDidMount() {
    this.fetchIP();
  }
  fetchWeatherData = city => {
    const baseUrl = "http://api.openweathermap.org";
    const path = "/data/2.5/weather";
    const appId = "f9b001589d96b792e00bebfe7f0c5aae";
    const query = `units=metric&lang=ru&appId=${appId}`;
    fetch(`${baseUrl}${path}?q=${city}${query}`)
    .then(response => response.json())
    .then(data => {
      const date = new Date();
      const time = date.getHours();
      this.setState({
        time,
        city,
        temperature: Math.round(data.main.temp),
        weatherCode: data.weather[0].id,
        fetching: false
      })
      console.log(data)
    })
    .catch(error => console.log(error));
  }
  fetchIP() {
    fetch("http//freegeoip.net/json/")
    .then(response => response.json())
    .then(({city}) => this.fetchWeatherData(city))
    .catch(error => console.log(error));
  }
  render() {
    const {icon, city, temperature, time, weatherCode, fetching} = this.state;
    return fetching ? <div className="app">Загрузка...</div>
    :
    <div className="app" data-hours={time}>
      <WeatherIcon icon={icon} weatherCode={weatherCode} time={time}/>
      <WeatherDetails city={city} tenperature={temperature}/>
    </div>
  }
}

export default App;

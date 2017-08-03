var axios = require('axios');

function getCurrentWeather(cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&type=accurate&APPID=YOUR-API-KEY');
}


module.exports = {
  currentWeather: function (cityName) {
    return getCurrentWeather(cityName)
  }
}

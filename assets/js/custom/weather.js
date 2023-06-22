const weather = document.querySelector('#weather');
const API_KEY = '716b32cd762e891cc58d9d4e35c0d057'; // my key

function getWeather(lat, long) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const name = json.name;
      const temp = json.main.temp.toFixed(0);
      const humidity = json.main.humidity;
      weather.innerHTML = `${temp}&#8451, ${humidity} @ ${name}`;
    })
}

function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('error!');
}

function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();
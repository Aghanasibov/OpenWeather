const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'c17bc3b039b1b73de4e0175c6792ff96';
const setQuery = (e) => {
  if (e.keyCode == '13') {
    getResult(searcBar.value);
  }
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  let city = document.querySelector('.city');
  city.innerText = `${result.name},${result.sys.country}`;
  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)}°C,`;
  let desc = document.querySelector('.desc');
  desc.innerText = result.weather[0].description;
  let minmax=document.querySelector(".minmax")
  minmax.innerText=`${Math.round(result.main.temp_min)}°C/${Math.round(result.main.temp_max)}°C`
};

const searcBar = document.getElementById('searcBar');
searcBar.addEventListener('keypress', setQuery);

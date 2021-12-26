const API_KEY = "a07007012a3abc2a7357289d720d566b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      // const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      const icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weather.appendChild(icon);
      weather.innerHTML += `${data.main.temp}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

setInterval(
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError),
  3600000
);

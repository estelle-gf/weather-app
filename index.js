function showWeather(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  currentTemperatureElement.innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;

  let currentHumidityElement = document.querySelector("#current-humidity");
  currentHumidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let currentWindElement = document.querySelector("#current-wind");
  currentWindElement.innerHTML = `${response.data.wind.speed} km/h`;
}
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  cityElement.innerHTML = city;
  let apiKey = "2a99380b94355b9foa25076te09bd049";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

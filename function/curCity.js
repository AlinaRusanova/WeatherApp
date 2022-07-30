let cityInpun = document.querySelector("#cityInput");
let curCitySelected = document.querySelector("#cur-city");

function search(city) {
  let units = "metric";
  //let apiKey = "1f8dafcd681189822cc60aba993259ca";
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
  axios.get(`${apiUrlCity}&appid=${apiKey}`).then(showTemperature);
}

function citySubmit(event) {
  event.preventDefault();

  let city = `${cityInpun.value}`;

  search(city);
}

let citySearchingForm = document.querySelector("#city-search-form");

citySearchingForm.addEventListener("submit", citySubmit);

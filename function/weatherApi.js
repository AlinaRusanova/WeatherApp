let apiKey = "1f8dafcd681189822cc60aba993259ca";

let cityInpun1 = document.querySelector("#cityInput");
let celsiusMain = null;
let celsiusMax = null;
let celsiusMin = null;
let feelsLike = null;

function convertUnix(unix) {
  var date = new Date(unix * 1000);
  var hours = "0" + date.getUTCHours();
  var minutes = "0" + date.getUTCMinutes();
  var formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
  return formattedTime;
}

function showTemperature(response) {
  console.log(response.data);
  curCitySelected.innerHTML = response.data.name;
  curDateSelecter.innerHTML = formatDate(new Date(), response.data.timezone);

  celsiusMain = response.data.main.temp;
  celsiusMax = response.data.main.temp_max;
  celsiusMin = response.data.main.temp_min;
  feelsLike = response.data.main.feels_like;

  mainTemp.innerHTML = Math.round(celsiusMain);
  maxTemp.innerHTML = Math.round(celsiusMax);
  minTemp.innerHTML = Math.round(celsiusMin);

  mainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  mainIcon.setAttribute("alt", `${response.data.weather[0].description}`);

  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  reelFeel.innerHTML = Math.round(feelsLike);
  sunRise.innerHTML = convertUnix(
    response.data.sys.sunrise + response.data.timezone
  );
  sunSet.innerHTML = convertUnix(
    response.data.sys.sunset + response.data.timezone
  );

  getForecast(response.data.coord);
  document.getElementById("toDo1").innerHTML = toDo1ideas();
  document.getElementById("toDo2").innerHTML = toDo2ideas();
  document.getElementById("toDo3").innerHTML = toDo3ideas();
}

//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function showPosition(position) {
  //let apiKey = "1f8dafcd681189822cc60aba993259ca";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}`;

  axios.get(`${apiUrlPosition}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let butCurrentPosition = document.querySelector("#citySearchingMap");
butCurrentPosition.addEventListener("click", getCurrentPosition);

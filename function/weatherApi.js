let apiKey = "1f8dafcd681189822cc60aba993259ca";

let cityInpun1 = document.querySelector("#cityInput");

function convertUnix(unix) {
  var date = new Date(unix * 1000);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
  return formattedTime;
}

function showTemperature(response) {
  console.log(response.data);
  curCitySelected.innerHTML = response.data.name;
  curDateSelecter.innerHTML = formatDate(response.data.dt);
  mainTemp.innerHTML = Math.round(response.data.main.temp);
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  minTemp.innerHTML = Math.round(response.data.main.temp_min);

  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  reelFeel.innerHTML = Math.round(response.data.main.feels_like);
  sunRise.innerHTML = convertUnix(response.data.sys.sunrise);
  sunSet.innerHTML = convertUnix(response.data.sys.sunset);
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

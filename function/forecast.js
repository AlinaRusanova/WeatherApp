let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = null;

let celsiusForecastMax = "null";
let celsiusForecastMin = "null";

function displayForecast(response) {
  let forecast = response.data.daily;

  console.log(response.data.daily);
  let forecastHTML = `<div class="row">`;
  // let forecastHTML = "";
  forecastElement.innerHTML = "";
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      //  celsiusForecastMax = forecastDay.temp.max;
      celsiusForecastMin = forecastDay.temp.min;

      forecastHTML += `<div class="col">


 <div class="WeatherForecast-day">${formatDateTwo(forecastDay.dt)}</div>
<img src="http://openweathermap.org/img/wn/${
        forecastDay.weather[0].icon
      }@2x.png"
 width="40" height="40"/>
<div class="WeatherForecast-temperatures"><span
class="WeatherForecast-temperature-max">${Math.round(
        forecastDay.temp.max
      )}</span>° <span
class="WeatherForecast-temperature-min">${Math.round(
        celsiusForecastMin
      )}</span>°
</div>

</div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates.lon);
  let units = "metric";
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrlForecast).then(displayForecast);
}

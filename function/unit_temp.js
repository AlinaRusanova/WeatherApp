let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");

let mainTemp = document.querySelector("#mainTemp");
let maxTemp = document.querySelector("#current-max-temperature");
let minTemp = document.querySelector("#current-min-temperature");

let mainIcon = document.querySelector("#main_icon");

let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let reelFeel = document.querySelector("#realFeel");
let sunRise = document.querySelector("#sunrise");
let sunSet = document.querySelector("#sunset");

function showCelsius(event) {
  event.preventDefault();
  fahrenheit.classList.remove("unitActive");
  celsius.classList.add("unitActive");
  mainTemp.innerHTML = Math.round(celsiusMain);
  maxTemp.innerHTML = Math.round(celsiusMax);
  minTemp.innerHTML = Math.round(celsiusMin);
  reelFeel.innerHTML = Math.round(feelsLike);
}

function showFahrenheit(event) {
  event.preventDefault();

  celsius.classList.remove("unitActive");
  fahrenheit.classList.add("unitActive");
  mainTemp.innerHTML = Math.round((celsiusMain * 9) / 5 + 32);
  maxTemp.innerHTML = Math.round((celsiusMax * 9) / 5 + 32);
  minTemp.innerHTML = Math.round((celsiusMin * 9) / 5 + 32);
  reelFeel.innerHTML = Math.round((feelsLike * 9) / 5 + 32);
}

celsius.addEventListener("mousedown", showCelsius);
fahrenheit.addEventListener("mousedown", showFahrenheit);

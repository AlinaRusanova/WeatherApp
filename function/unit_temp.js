let temp_cel = 18;
let max_cel = 23;
let min_cel = 17;

let temp_far = (temp_cel * 9) / 5 + 32;
let max_far = (max_cel * 9) / 5 + 32;
let min_far = (min_cel * 9) / 5 + 32;

let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");

let mainTemp = document.querySelector("#mainTemp");
let maxTemp = document.querySelector("#current-max-temperature");
let minTemp = document.querySelector("#current-min-temperature");

let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let reelFeel = document.querySelector("#realFeel");
let sunRise = document.querySelector("#sunrise");
let sunSet = document.querySelector("#sunset");

function showCelsius(event) {
  event.preventDefault();
  mainTemp.innerHTML = temp_cel;
  maxTemp.innerHTML = max_cel;
  minTemp.innerHTML = min_cel;
}

function showFahrenheit(event) {
  event.preventDefault();
  mainTemp.innerHTML = Math.round(temp_far);
  maxTemp.innerHTML = Math.round(max_far);
  minTemp.innerHTML = Math.round(min_far);
}

celsius.addEventListener("mousedown", showCelsius);
fahrenheit.addEventListener("mousedown", showFahrenheit);

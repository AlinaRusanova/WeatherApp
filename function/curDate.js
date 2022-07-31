let curDate = new Date();

function formatDate(date, timezone) {
  let localOffsetInMs = date.getTimezoneOffset() * 60 * 1000;
  let targetOffsetInMs = timezone * 1000;
  let targetTimestamp = date.getTime() + localOffsetInMs + targetOffsetInMs;

  let now = new Date(targetTimestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = now.getFullYear();
  let currentDay = days[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let currentDate = now.getDate();
  let currentHours = "0" + now.getHours();
  var currentMin = "0" + now.getMinutes();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHours.substr(
    -2
  )}:${currentMin.substr(-2)}`;

  return formattedDate;
}

function formatDateTwo(timeSpan) {
  var date = new Date(timeSpan * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = date.getDay();

  return days[day];
}

let curDateSelecter = document.querySelector("#cur-date");
//curDateSelecter.innerHTML = formatDate(curDate);

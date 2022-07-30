let curDate = new Date();

function formatDate(unix) {
  var date = new Date(unix * 1000);

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

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHours = "0" + date.getHours();
  var currentMin = "0" + date.getMinutes();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHours.substr(
    -2
  )}:${currentMin.substr(-2)}`;

  return formattedDate;
}

let curDateSelecter = document.querySelector("#cur-date");
//curDateSelecter.innerHTML = formatDate(curDate);

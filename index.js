// Function to format the date and time
function completeday(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newday = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${newday} ${hours}:${minutes}`;
}

// Function to display the temperature
function displaytemp(response) {
  let temp_number = document.querySelector("#number");
  temp_number.innerHTML = `${Math.round(response.data.temperature.current)}`;
  let cityElement = document.querySelector("#cityelement");
  cityElement.innerHTML = response.data.city;
}

// Function to handle the search form submission
function replace(event) {
  event.preventDefault();
  let searchspace = document.querySelector("#search-bar");
  let city = searchspace.value;

  let apiKey = "c69690dffef27at0b043of215d340482"; // Use your actual API key
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displaytemp);
}

// Set up event listener for the search form submission
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", replace);

// Display the current date and time
let completedate = document.querySelector("#current-date");
let currentDate = new Date();
completedate.innerHTML = completeday(currentDate);

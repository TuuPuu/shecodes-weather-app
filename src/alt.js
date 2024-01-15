/* ADDING TIME INTO CODE */
function addTimeOnPage() {
  // function to get the time and date data
  function getDateAndTime() {
    let newDate = new Date();

    // GETTING THE DAY
    let listOfDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // here is the current day
    let currentDay = listOfDays[newDate.getDay()];

    // GETTING THE TIME
    let listOfHours = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ];

    let listOfMinutes = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
    ];
    let currentHour = listOfHours[newDate.getHours()];
    let currentMinute = newDate.getMinutes();

    // code to fix minute print error
    if (currentMinute <= 9) {
      currentMinute = listOfMinutes[currentMinute];
    }

    // here is the current time
    let currentTime = `${currentHour}:${currentMinute}`;

    // FULL TIME AND DATE HERE
    let dateAndTime = `${currentDay} ${currentTime}`;
    return dateAndTime;
  }
  let fetchedDate = getDateAndTime();

  // ________________________________________________________________
  // code to edit HTML
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${fetchedDate}`;
}
addTimeOnPage();

/* CHANGING CITY AND TEMP BASED ON INPUT (api)*/
function changeCity() {
  let searchForm = document.querySelector("#search-form");

  // function to access user input
  function getInput(event) {
    event.preventDefault();

    //  this access the seach bar for event listener
    let userInput = document.querySelector("#user-input");

    // function to capitalise accessed user input
    function capitaliseLetter() {
      let submittedUserInput = userInput.value;
      const trimmedInput = submittedUserInput.trim();
      const firstLetter = trimmedInput.charAt(0);
      const firstLetterCap = firstLetter.toUpperCase();
      const remainingLetters = trimmedInput.slice(1);
      const updatedRemainingLetters = remainingLetters.toLowerCase();
      const updatedTrimmedInput = firstLetterCap + updatedRemainingLetters;

      return updatedTrimmedInput;
    }

    // function to get api temp and display in DOM
    function displayTemperature(response) {
      let fetchedTemperature = Math.round(response.data.temperature.current);
      let fetchedCity = response.data.city;

      cityDisplayed.innerHTML = fetchedCity;
      temperatureDisplayed.innerHTML = fetchedTemperature;
    }

    let cityDisplayed = document.querySelector("#city");
    let temperatureDisplayed = document.querySelector("#city-temperature");
    let updatedUserInput = capitaliseLetter();
    let apiKey = "f83ea03eaec86b89t28973b8846f30o5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${updatedUserInput}&key=${apiKey}`;

    // initiate api call
    axios.get(apiUrl).then(displayTemperature);
  }
  searchForm.addEventListener("submit", getInput);
}
changeCity();

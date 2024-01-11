// ADDING TIME INTO CODE
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
    let currentHour = listOfHours[newDate.getHours()];
    let currentMinute = newDate.getMinutes();

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

// CHANGING CITY BASED ON INPUT
// function changeCity(){}
let searchForm = document.querySelector("#search-form");

// function to access user input
function getInput(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let cityDisplayed = document.querySelector("#city");

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
  let updatedUserInput = capitaliseLetter();

  // push the user input into the HTML
  cityDisplayed.innerHTML = `${updatedUserInput}`;
}
searchForm.addEventListener("submit", getInput);

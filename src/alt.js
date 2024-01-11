// ADDING TIME INTO CODE

let newDate = new Date();
console.log(newDate);

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
console.log(currentDay);

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
console.log(currentTime);

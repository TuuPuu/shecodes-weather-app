// LIST OF CITIES AND THIER DETAILS
let cities = [
  { city: "London", temperature: 10, faren: 13, humidity: 23 },
  { city: "Paris", temperature: 12, faren: 2, humidity: 2 },
  { city: "New York", temperature: 6, faren: 36, humidity: 45 },
  { city: "Tokyo", temperature: 24, faren: 34, humidity: 13 },
  { city: "Lisbon", temperature: 8, faren: 4, humidity: 9 },
  { city: "Abidjan", temperature: 34, faren: 8, humidity: 21 },
];

// GET INPUT FROM USER
let chosenCity = "";
let chosenTemperature = "";
let chosenFaren = "";
let chosenHumidity = "";
let userCity = "";
let userInput = prompt("Enter your city");


// FIX USER INPUT
let userCityLowerCase = userInput.trim().toLowerCase();


// CAPITALISE USER INPUT
let firstLetter = userCityLowerCase.charAt(0).toUpperCase();
let restOfWord = userCityLowerCase.slice(1);
userCity = firstLetter + restOfWord;

console.log(userCity);

// DECIDE OUTPUT FOR USER

// if (userCity === cities[0].city) {
//   chosenCity = cities[0].city;
//   chosenTemperature = cities[0].temperature;
//   chosenFaren = cities[0].faren;
//   chosenHumidity = cities[0].humidity;
//   alert(
//     `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
//   );
// } else {
//   alert(`City not found`);
// }

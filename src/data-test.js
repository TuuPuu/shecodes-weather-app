// CLEANER CODE
// LIST OF CITIES AND THIER DETAILS (OBJECTS)
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
function fixUserInput() {
  let userCityLowerCase = userInput.trim().toLowerCase();

  // CAPITALISE USER INPUT
  let firstLetter = userCityLowerCase.charAt(0).toUpperCase();
  let restOfWord = userCityLowerCase.slice(1);
  return (userCity = firstLetter + restOfWord);
}
fixUserInput();

// DECIDE OUTPUT FOR USER
function decideOutput() {
  if (userCity === cities[0].city) {
    chosenCity = cities[0].city;
    chosenTemperature = cities[0].temperature;
    chosenFaren = cities[0].faren;
    chosenHumidity = cities[0].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[1].city) {
    chosenCity = cities[1].city;
    chosenTemperature = cities[1].temperature;
    chosenFaren = cities[1].faren;
    chosenHumidity = cities[1].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[2].city) {
    chosenCity = cities[2].city;
    chosenTemperature = cities[2].temperature;
    chosenFaren = cities[2].faren;
    chosenHumidity = cities[2].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[3].city) {
    chosenCity = cities[3].city;
    chosenTemperature = cities[3].temperature;
    chosenFaren = cities[3].faren;
    chosenHumidity = cities[3].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[4].city) {
    chosenCity = cities[4].city;
    chosenTemperature = cities[4].temperature;
    chosenFaren = cities[4].faren;
    chosenHumidity = cities[4].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[5].city) {
    chosenCity = cities[5].city;
    chosenTemperature = cities[5].temperature;
    chosenFaren = cities[5].faren;
    chosenHumidity = cities[5].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userInput}`
    );
  }
}
decideOutput();

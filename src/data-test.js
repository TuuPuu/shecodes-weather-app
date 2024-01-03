// CLEANER CODE
// LIST OF CITIES AND THIER DETAILS (OBJECTS)
let cities = [
  { city: "Paris", temperature: 19.7, humidity: 80 },
  { city: "Tokyo", temperature: 17.3, humidity: 50 },
  { city: "Lisbon", temperature: 30.2, humidity: 20 },
  { city: "San Francisco", temperature: 20.9, humidity: 100 },
  { city: "Oslo", temperature: -5, humidity: 20 },
  { city: "Abidjan", temperature: 34, humidity: 2 },
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
    chosenTemperature = Math.round(cities[0].temperature);
    chosenFaren = Math.round((cities[0].temperature * 9) / 5 + 32);
    chosenHumidity = cities[0].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[1].city) {
    chosenCity = cities[1].city;
    chosenTemperature = Math.round(cities[1].temperature);
    chosenFaren = Math.round((cities[1].temperature * 9) / 5 + 32);
    chosenHumidity = cities[1].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[2].city) {
    chosenCity = cities[2].city;
    chosenTemperature = Math.round(cities[2].temperature);
    chosenFaren = Math.round((cities[2].temperature * 9) / 5 + 32);
    chosenHumidity = cities[2].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[3].city) {
    chosenCity = cities[3].city;
    chosenTemperature = Math.round(cities[3].temperature);
    chosenFaren = Math.round((cities[3].temperature * 9) / 5 + 32);
    chosenHumidity = cities[3].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[4].city) {
    chosenCity = cities[4].city;
    chosenTemperature = Math.round(cities[4].temperature);
    chosenFaren = Math.round((cities[4].temperature * 9) / 5 + 32);
    chosenHumidity = cities[4].humidity;
    alert(
      `It is currently ${chosenTemperature}°C (${chosenFaren}°F) in ${chosenCity} and the humidity is ${chosenHumidity}%`
    );
  } else if (userCity === cities[5].city) {
    chosenCity = cities[5].city;
    chosenTemperature = Math.round(cities[5].temperature);
    chosenFaren = Math.round((cities[5].temperature * 9) / 5 + 32);
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

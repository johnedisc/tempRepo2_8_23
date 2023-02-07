import {WeatherService} from './js/weatherService.js';
import './css/styles.css';

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const city = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  let weatherPromise = WeatherService.getWeather(city);
  weatherPromise.then((weatherDataArr) => {
    printElements(weatherDataArr);
  }, (errorArr) => {
    printError(errorArr);
  });
}

function printElements(results) {
  document.querySelector('#showResponse').innerText = `The humidity in ${results[1]} is ${results[0].main.humidity}%.
  The temperature in Kelvins is ${results[0].main.temp} degrees.`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

import render from './render';
import { sel } from './helpers.js';
import './css/form.css';

// const sel = (selector) => document.querySelector(selector);
// let city = 'tokyo'

async function fetchData(url) {
  const response = await fetch(url, {mode: 'cors'});
  const data = await response.json();
  return { name: data.name, temp: data.main.temp, weather: data.weather[0].main };
}

// fetchData(url).then(console.log)
sel('#btnSend').addEventListener('click', (event) => {
  const cityInput = sel('#city').value;
  const api = '6ca8aaad293b0b0a3ad93f29e82425f8';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api}`;

  // display data
  fetchData(url).then(console.log);

  event.preventDefault();
});

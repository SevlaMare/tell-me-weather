import render from './render';
import { sel } from './helpers';
import './css/style.css';
import './css/form.css';

const api = '6ca8aaad293b0b0a3ad93f29e82425f8';

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  if (response.status === 401) { return console.error('BAD REQUEST | Access not allowed'); }
  if (response.status === 404) { return console.error('BAD REQUEST | City not found'); }
  const data = await response.json();

  console.log(data)
  return { name: data.name, temperature: data.main.temp, weather: data.weather[0].main, icon: data.weather[0].icon };
};

const safeFetch = (url) => {
  try { return fetchData(url); } catch (err) { return console.warn('Bad request |', err); }
};

sel('#btnSend').addEventListener('click', (event) => {
  const cityInput = sel('#city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api}`;

  safeFetch(url)
    .then((info) => { render(info.name, info.temperature, info.weather, info.icon); })
    .catch(err => console.warn('City not found |', err));

  event.preventDefault();
});

import render from './render';
import { sel } from './helpers';
import './css/form.css';
import './css/style.css';

const api = '6ca8aaad293b0b0a3ad93f29e82425f8';

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return { name: data.name, temperature: data.main.temp, weather: data.weather[0].main };
};

sel('#btnSend').addEventListener('click', (event) => {
  const cityInput = sel('#city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api}`;
  fetchData(url).then(info => render(info.name, info.temperature, info.weather));
  event.preventDefault();
});

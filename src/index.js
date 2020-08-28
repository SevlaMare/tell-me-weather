import render from './render';
import { sel } from './helpers';
import './css/style.css';
import './css/form.css';
import './css/switch.css';

const api = '6ca8aaad293b0b0a3ad93f29e82425f8';

const displayError = (msg) => { sel('#error').innerHTML = msg; };

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  if (response.status !== 200) { return displayError('City not found'); }
  const data = await response.json();

  return {
    name: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
  };
};

sel('#btnSend').addEventListener('click', (event) => {
  const cityInput = sel('#city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api}`;
  fetchData(url).then((info) => {
    const {
      name, temperature, weather, icon,
    } = info;
    render(name, temperature, weather, icon);
  });
  event.preventDefault();
});

sel('#unitsTemp').addEventListener('click', () => {
  if (sel('#unitsTemp').checked !== true) {
    const celsius = sel('#tempDisplay').innerHTML;
    const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
    sel('#tempDisplay').innerHTML = fahrenheit;
  } else {
    const fahrenheit = sel('#tempDisplay').innerHTML;
    const celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
    sel('#tempDisplay').innerHTML = celsius;
  }
});

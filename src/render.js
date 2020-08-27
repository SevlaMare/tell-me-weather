import { createContent, createContainer, sel } from './helpers';

const render = (city, temp, weather, ico) => {
  const icon = `https://openweathermap.org/img/wn/${ico}@4x.png`;
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  sel('#weatherDisplay').innerHTML = `${weather}`;
  sel('#bg-weather').setAttribute('src', icon);

  const bg = document.body;
  if (weather === 'Rain') {
    bg.style.background = 'blue';
  } else if (weather === 'Snow') {
    bg.style.background = 'white';
  } else if (weather === 'Clear') {
    bg.style.background = 'orange';
  } else {
    bg.style.background = 'gray';
  }
};

export default render;

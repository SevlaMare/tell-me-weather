import { sel } from './helpers';

const render = (city, temp, weather, ico) => {
  const icon = `https://openweathermap.org/img/wn/${ico}@4x.png`;
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)}`;
  sel('#weatherDisplay').innerHTML = `${weather}`;
  sel('#bg-weather').setAttribute('src', icon);
  sel('#error').innerHTML = '';

  const bg = document.body;
  if (weather === 'Rain') {
    bg.style.background = 'lightblue';
  } else if (weather === 'Snow') {
    bg.style.background = 'white';
  } else if (weather === 'Clear') {
    bg.style.background = 'orange';
  } else {
    bg.style.background = 'gray';
  }

  if (sel('#unitsTemp').checked !== true) {
    sel('#tempDisplay').innerHTML = (sel('#tempDisplay').innerHTML * (9 / 5) + 32).toFixed(2);
  }
};

export default render;

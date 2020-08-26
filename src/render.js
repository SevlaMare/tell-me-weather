import { sel } from './helpers';

const render = (city, temp, weather) => {
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  sel('#weatherDisplay').innerHTML = `${weather}`;
};

export default render;

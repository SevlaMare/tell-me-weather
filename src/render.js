import { sel } from './helpers';

const render = (city, temp, weather, ico) => {
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  sel('#weatherDisplay').innerHTML = `${weather}`;


  let icon = `https://openweathermap.org/img/wn/${ico}@2x.png`
  sel('#bg-weather').setAttribute('src', icon)
};

export default render;

import sel from './helpers';

const render = (city, temp, weather, ico) => {
  const icon = `https://openweathermap.org/img/wn/${ico}@4x.png`;
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  sel('#weatherDisplay').innerHTML = `${weather}`;
  sel('#bg-weather').setAttribute('src', icon);
};

export default render;

import { sel } from './helpers';

const render = (city, temp, weather) => {
  sel('#cityDisplay').innerHTML = `${city}`;
  sel('#tempDisplay').innerHTML = `${Math.trunc(temp)} °C`;
  sel('#weatherDisplay').innerHTML = `${weather}`;

  // let icon = './cloud.svg'
  // if (weather == 'clouds') { icon = '../cloud.svg' }
  // else if (weather == 'rain') { icon = '../rain.svg' }
  // else if (weather == 'snow') { icon = '../snow.svg' }
  sel('#bg-weather').setAttribute('src', './cloud.svg')
};

export default render;

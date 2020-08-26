import { createContent, createContainer, sel } from './helpers';

const render = (city, temp, weather) => {
  const box = createContainer('div');
  const cityInfo = createContent('h1', `${city}`);
  const tempInfo = createContent('h2', `${temp}`);
  const weatherInfo = createContent('p', `${weather}`);

  box.append(cityInfo, tempInfo, weatherInfo);
  sel('main').append(box);
};

export default render;

import { createContent, createContainer, sel } from './helpers';

const render = (city, temp, weather) => {
  const box = createContainer('div', 'container');
  const titleInfo = createContent('h1', 'Weather Now');
  const tempInfo = createContent('p', '1000°C');

  box.append(titleInfo, tempInfo);
  sel('main').append(box);
};

export default render;

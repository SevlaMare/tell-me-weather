import { createContent, createContainer, sel } from './helpers.js';

const render = () => {
  const box = createContainer('div', 'container')
  const title = createContent('h1', 'Weather Now')
  const temp = createContent('p', '1000 degrees right now')

  box.append(title, temp)
  sel('main').append(box)
};

export default render;

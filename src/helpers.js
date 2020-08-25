const createContainer = (tag, className, idName) => {
  const element = document.createElement(tag);

  if (className) { element.className = className; }
  if (idName) { element.id = idName; }

  return element;
};

const createContent = (tag, text, className) => {
  const element = document.createElement(tag);

  if (text) { element.innerHTML = text; }
  if (className) { element.className = className; }

  return element;
};

const sel = (selector) => document.querySelector(selector);

export { createContent, createContainer, sel };

function tag(...args) {
  const name = args.shift();
  let attributesObject = {};
  if (args.length > 0 && typeof args[0] !== "string") {
    attributesObject = args.shift();
  }
  const children = args;
  let attributesString = "";
  for (const [key, value] of Object.entries(attributesObject)) {
    attributesString += ` ${key}="${value}"`;
  }
  const innerHtml = children.join("");
  return `<${name}${attributesString}>${innerHtml}</${name}>`
}

export function useTag(name) {
  return (...args) => tag(name, ...args);
}

export function inject(containerId, html) {
  const element = document.getElementById(containerId);
  element.innerHTML = html;
}

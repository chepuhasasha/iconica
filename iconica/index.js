import lib from './assets/lib.json'

export default function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  svg.setAttributeNS(null, 'viewBox', '0 0 20 20');
  svg.setAttributeNS(null, 'width', 100);
  svg.setAttributeNS(null, 'height', 100);
  path.setAttributeNS(null, 'd', lib[name].default);
  svg.appendChild(path)
  return svg
}
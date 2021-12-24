import lib from './assets/lib.json'

export default function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttributeNS(null, 'width', 20);
  svg.setAttributeNS(null, 'height', 20);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttributeNS(null, 'd', lib[name].default);
  svg.appendChild(path)
  return svg
}
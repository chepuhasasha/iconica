import lib from './assets/lib.json'

export default function icon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttributeNS(null, 'd', lib[name]);
  path.setAttributeNS(null, 'fill', 'red');
  svg.appendChild(path)
  return svg
}
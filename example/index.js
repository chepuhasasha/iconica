import SS from '../shapeshape';

const container = document.createElement('div');
document.body.appendChild(container);

const svg = SS.SVG({ id: 'svg', width: 500, height: 500 }, container)
const r = SS.rect({ x: 0, y: 0, width: 200, height: 100, fill: 'red' })
const c = SS.circle({ cx: 200, cy: 100, r: 50, fill: 'blue' })
const c2 = SS.circle({ cx: 100, cy: 100, r: 50, fill: 'green' })

r.fill = 'blue'
c.fill = 'red'

const toggle = function() {
  this.selected = !this.selected
  this.fill = 'blue'
}
const move = function(e) {
  if(this.selected) {
    this.fill = 'red'
    this.x = e.pageX - this.width / 2
    this.y = e.pageY - this.height / 2
  }
}

r.listen('mousedown', toggle)
r.listen('mousemove', move)
r.listen('mouseup', toggle)

svg.add([r, c, c2])
svg.delete(c2)

/* <polygon points="100,100 150,25 150,75 200,0"
fill="none" stroke="black" /> */
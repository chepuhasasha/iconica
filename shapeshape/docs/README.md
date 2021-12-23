<a name='home'></a>
<img src='../assets/logo.svg' style='width: 200px;'>
# SHAPE SHAPE

- [Start](#start)
- [Make element](#make_element)
- [Events](#events)

<hr>

<a name='start'></a>
### Start
[menu](#home)
```
npm install shapeshape
```
```html
<div id='container'></div>
```
```js
import SS from 'shapeshape';

const container = document.getElementById('container');

const svg = SS.SVG({
  id: 'my-svg',
  width: 500,
  height: 500,
}, container);
```
result:
```html
<div id='container'>
  <svg id='my-svg' width='500' height='500'></svg>
</div>
```
<hr>

<a name='make_element'></a>
### Make element
[menu](#home)
```js
const rect = SS.rect({ 
  x: 10,
  y: 10,
  width: 100,
  height: 50,
  fill: 'red'
});
svg.add(rect)
```
result:
```html
<svg id='my-svg' width='500' height='500'>
  <rect x='10' y='10' width='100' height='50' fill='red'></rect>
</svg>
```
<hr>

<a name='events'></a>
### Events
[menu](#home)
```js
rect.listen('mousedown', function(e) {
  this.fill = 'blue'  // this = rect context
})

// or native
rect.element.addEventListener('mousedown', () => {...})
```

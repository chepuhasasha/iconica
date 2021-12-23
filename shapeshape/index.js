function PROXY(target) {
  const exceptions = [
    ...Object.getOwnPropertyNames(Object.getPrototypeOf(target)),
    ...Object.getOwnPropertyNames(target),
  ]
  return new Proxy(target, {
    get(target, prop) {
      if(exceptions.includes(prop)) {
        return target[prop];
      }
      return target.attrs[prop];
    },
    set(target, prop, val) {
      if(exceptions.includes(prop)) {
        target[prop] = val;
        return target[prop];
      }
      target.attrs[prop] = val;
      target.update(target.attrs)
      return true;
    }
  })
}

class Element {
  constructor(name = 'svg', attrs = {}, container) {
    this.element = null;
    this.attrs = attrs;
    this.modes = {};
    this.childs = [];
    this.createElement(name);
    this.update(this.attrs);
    this.addEl(this.element, container);
  }

  createElement(name) {
    this.element = document.createElementNS('http://www.w3.org/2000/svg',name);
  }

  addEl(el, container) {
    if (container) {
      container.appendChild(el);
    }
  }

  removeEl(el, container) {
    if (container) {
      container.removeChild(el);
    }
  }

  add(el) {
    if (Array.isArray(el)) {
      el.forEach(item => {
        this.childs.push(item);
        this.addEl(item.element, this.element)
      })
      return
    }
    this.childs.push(el);
    this.addEl(el.element, this.element)
  }

  delete(el) {
    const result = this.childs.filter(child => child != el)
    this.childs = result
    this.removeEl(el.element, this.element)
  }

  update(attrs) {
    Object.keys(attrs).forEach(key => {
      this.element.setAttributeNS(null, key, attrs[key]);
    })
  }

  setMode(name) {
    this.update(this.modes[name]);
  }

  listen(name, f){
    this.element.addEventListener(name, f.bind(this));
  }
}

export default {
  SVG(attrs = {}, container) {
    return PROXY(new Element('svg', attrs, container));
  },
  rect(attrs = {}) {
    return PROXY(new Element('rect', attrs));
  },
  circle(attrs = {}) {
    return PROXY(new Element('circle', attrs));
  }
}
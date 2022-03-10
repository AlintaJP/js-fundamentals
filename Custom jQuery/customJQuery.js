class JQuery {
  elem;

  query(selector) {
    this.elem = document.querySelector(selector);
    return this;
  }

  addClass(classNames) {
    const classes = classNames.split(' ');
    this.elem.classList.add(...classes);
    return this;
  }

  removeClass(classNames) {
    const classes = classNames.split(' ');
    this.elem.classList.remove(classes);
    return this;
  }

  append(html) {
    this.elem.insertAdjacentHTML('afterend', html);
    return this;
  }

  remove(selector = '') {
    if (selector) {
      this.elem.querySelector(selector).remove();
    } else {
      this.elem.remove();
    }
    return this;
  }

  text(text) {
    if (arguments.length === 0) {
      return this.elem.innerText;
    }

    if (arguments.length === 1) {
      const newText = document.createTextNode(text);
      this.elem.appendChild(newText);
    }

    return this;
  }

  attr(attributeName, value) {
    if (arguments.length === 1) {
      return this.elem.getAttribute(attributeName);
    }

    if (arguments.length === 2) {
      this.elem.setAttribute(attributeName, value);
    }

    return this;
  }

  children(selector = '') {
    if (selector) {
      return this.elem.querySelector(selector);
    } else {
      let childrenArray = [];
      for (let i = 0; i < this.elem.children.length; i++) {
        childrenArray.push(this.elem.children[i]);
      }
      return childrenArray;
    }
  }

  empty() {
    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }
    return this;
  }

  css(props, value) {
    if (arguments.length === 1) {
      const style = getComputedStyle(this.elem);

      if (typeof props === 'object') {
        Object.keys(props).forEach((key) => {
          this.elem.style.setProperty(key, props[key]);
        });
      }

      if (Array.isArray(props)) {
        const propsObj = {};
        props.forEach((propName) => {
          propsObj[propName] = style[propName];
        });
        console.log(propsObj);
        return propsObj;
      } else {
        return style[props];
      }
    }

    if (arguments.length === 2) {
      this.elem.style.setProperty(props, value);
    }

    return this;
  }

  click(handler) {
    if (arguments.length === 0) {
      this.elem.trigger('click');
    }

    if (arguments.length === 1) {
      this.elem.addEventListener('click', handler);
    }

    return this;
  }
}

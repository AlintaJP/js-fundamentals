class JQuery {
  elem;

  query(selector) {
    this.elem = document.querySelector(selector);
    return this;
  }

  addClass(classNames) {
    const classes = classNames.split(" ");
    this.elem.classList.add(...classes);
    return this;
  }

  removeClass(classNames) {
    const classes = classNames.split(" ");
    this.elem.classList.remove(classes);
    return this;
  }

  append(html) {
    this.elem.insertAdjacentHTML("afterend", html);
    return this;
  }

  remove(selector = "") {
    if (selector) {
      this.elem.querySelector(selector).remove();
    } else {
      this.elem.remove();
    }
    return this;
  }

  text(text) {
    if (arguments.length === 0) {
      console.log(this.elem.innerText);
    }

    if (arguments.length === 1) {
      const newText = document.createTextNode(text);
      this.elem.appendChild(newText);
    }

    return this;
  }

  attr(attributeName, value) {
    if (arguments.length === 1) {
      console.log(this.elem.getAttribute(attributeName));
    }

    if (arguments.length === 2) {
      this.elem.setAttribute(attributeName, value);
    }
    return this;
  }

  children(selector = "") {
    if (selector) {
      console.log(this.elem.querySelector(selector));
    } else {
      for (let i = 0; i < this.elem.children.length; i++) {
        console.log(this.elem.children[i]);
      }
    }
    return this;
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

      if (Array.isArray(props)) {
        props.forEach((propName) => {
          console.log(style[propName]);
        });
      } else {
        console.log(style[props]);
      }

      if (typeof props === "object") {
        Object.keys(props).forEach((key) => {
          this.elem.style.setProperty(key, props[key]);
        });
      }
    }

    if (arguments.length === 2) {
      this.elem.style.setProperty(props, value);
    }

    return this;
  }

  click(handler) {
    if (arguments.length === 0) {
      this.elem.trigger("click");
    }

    if (arguments.length === 1) {
      this.elem.addEventListener("click", handler);
    }

    return this;
  }
}

const jquery = new JQuery();
jquery
  .query(".element-2")
  .addClass("some-class another-class")
  .removeClass("some-class")
  .append("<p class='jquery-elem'>JQUERY</p>")
  .attr("id")
  .attr("id", "new-id")
  .children()
  .css({ color: "green", "font-weight": "bold" });

jquery
  .query(".element-4")
  .text("Random text")
  .text()
  .css("background-color", "rgba(200, 200, 0)")
  .click(() => {
    alert("Hello!");
  });

jquery.query(".element-5").empty();
jquery.query(".element-6").css(["color", "background-color"]);

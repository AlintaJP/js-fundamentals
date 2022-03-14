//ES5
function greetings(name) {
  return "hello " + name;
}

//ES6
greetings = (name) => {
  return `hello ${name}`;
};

//ES5
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, c: 3, d: 4 };
var obj3 = Object.assign(obj1, obj2);

var obj4 = { a: 1, b: 2, c: 3, d: 4 };
var a = obj4.a;
var b = obj4.b;
var c = obj4.c;
var d = obj4.d;

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var obj5 = { a: a, b: b, c: c, d: d };

//ES6
const object1 = { a: 1, b: 2 };
const object2 = { a: 2, c: 3, d: 4 };
const object3 = { ...obj1, ...obj2 };

const object4 = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, c, d } = object4;

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const object5 = { a, b, c, d };

//ES5
function isGreater(a, b, cb) {
  var greater = false;
  if (a > b) {
    greater = true;
  }
  cb(greater);
}

isGreater(1, 2, function (result) {
  if (result) {
    console.log("greater");
  } else {
    console.log("smaller");
  }
});

//ES6
isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    try {
      a > b ? resolve(console.log("greater")) : resolve(console.log("smaller"));
    } catch (err) {
      reject(new Error("Something went wrong"));
    }
  });
};

//ES5
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
  this.greet = function () {
    if (this.canTalk) {
      console.log("Hello, I " + this.name);
    }
  };
};

var Employee = function (name, title) {
  this.name = name;
  this.title = title;
  this.greet = function () {
    if (this.canTalk) {
      console.log("Hello, I " + this.name + ", " + this.title);
    }
  };
};
Employee.prototype = new Person();

var Customer = function (name) {
  this.name = name;
};
Customer.prototype = new Person();

var Mime = function (name) {
  this.name = name;
  this.canTalk = false;
};
Mime.prototype = new Person();

//ES6
class Person {
  constructor(name) {
    this.name = name;
    this.canTalk = true;
  }

  greet() {
    if (this.canTalk) {
      console.log("Hello, I am " + this.name);
    }
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }

  greet() {
    if (this.canTalk) {
      console.log("Hello, I am " + this.name + ", " + this.title);
    }
  }
}

class Customer extends Person {
  constructor(name) {
    super(name);
  }
}

class Mime extends Person {
  constructor(name) {
    super(name);
    this.canTalk = false;
  }
}

//ES6 Calculator
class Calculator {
  #result;

  get result() {
    return this.#result;
  }

  add(a, b) {
    const result = a + b;
    this.#result = result;
    return result;
  }

  subtraction(a, b) {
    const result = a - b;
    this.#result = result;
    return result;
  }

  multiplication(a, b) {
    const result = a * b;
    this.#result = result;
    return result;
  }

  division(a, b) {
    const result = a / b;
    this.#result = result;
    return result;
  }
}

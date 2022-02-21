class ArrayLib {
  constructor() {
    this.array = [];
  }

  take(array, n) {
    if (arguments.length < 2 && this.array) {
      this.array = this.array.slice(0, arguments[0]);
      return this;
    }
    return array.slice(0, n);
  }

  skip(array, n) {
    if (arguments.length < 2 && this.array) {
      this.array = this.array.slice(arguments[0]);
      return this;
    }
    return array.slice(n);
  }

  map(array, cb) {
    if (arguments.length < 2 && this.array) {
      this.array = this.array.map(arguments[0]);
      return this;
    }
    return array.map(cb);
  }

  reduce(array, cb, initialValue) {
    if (arguments.length < 3 && this.array) {
      this.array = this.array.reduce(arguments[0], arguments[1]);
      return this;
    }
    return array.reduce(cb, initialValue);
  }

  filter(array, cb) {
    if (arguments.length < 2 && this.array) {
      this.array = this.array.filter(arguments[0]);
      return this;
    }
    return array.filter(cb);
  }

  foreach(array, cb) {
    if (arguments.length < 2 && this.array) {
      this.array = this.array.map(arguments[0]);
      return this;
    }
    array.forEach(cb);
  }

  chain(array) {
    this.array = [...array];
    return this;
  }

  value() {
    if (this.array) {
      return this.array;
    }

    return this;
  }
}

const arrayLib = new ArrayLib();

const array = [1, 2, 3, 4, 5, 6];

console.log(arrayLib.take(array, 2));
console.log(arrayLib.skip(array, 2));
console.log(arrayLib.map(array, (a) => a * 2));
console.log(arrayLib.reduce(array, (a, b) => a + b, 4));
console.log(arrayLib.filter(array, (n) => n > 3));

const copyNumbers = [];
arrayLib.foreach(array, (n) => copyNumbers.push(n + 1));
console.log(copyNumbers);

console.log(
  arrayLib
    .chain(array)
    .take(4)
    .map((a) => a * 2)
    .filter((n) => n > 4)
    .foreach((n) => n * 5)
    .value()
);

function Accumulator(number) {
  this.number = number;
  this.increment = function () {
    this.number++;
    return this.number;
  };
  this.decrement = function () {
    this.number--;
    return this.number;
  };
}

let accumulator = new Accumulator(28);
console.log(accumulator.number);
let increment = accumulator.increment();
console.dir(increment);
let decrement = accumulator.decrement();
console.dir(decrement);

function CancelableAccumualtor(number) {
  let number = null;
  this.clear = function () {
    this.number = Accumulator.number;
  };
}

CancelableAccumualtor.prototype = Object.create(Accumulator.prototype);

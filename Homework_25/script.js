function isObjectEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    console.log('empty');
    return true;
} else {
  console.log("isn't empty");
}
}

let obj = {};

isObjectEmpty(obj);

let user = {
  name: "Stas",
  age: 22,
  sayHello: function () {
    alert(`Привіт я ${this.name} мені ${this.age} років`);
  },
};

user.sayHello();

let Calc = {
    a:null,
    b:null,
  ask: function () 
  {
    this.a = +prompt("Напишіть перше число");
    this.b = +prompt("Напишіть друге число");
  },
  sum: function () 
  {
    console.log(this.a + this.b);
  },
  mul: function () 
  {
    console.log(this.a * this.b);
  },
};

Calc.ask();
Calc.sum();
Calc.mul();

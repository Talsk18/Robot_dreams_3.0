
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);


function addition(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return a + b;
  } else {
    console.log("Not a number");
  }
}

let division = function (a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return a / b;
  } else {
    console.log("Not a number");
  }
};

const multiplication = (a, b) => {
  if (typeof a === "number" || typeof b === "number") {
    return a * b;
  } else {
    console.log("Not a number");
  }
};

function substraction(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    return a - b;
  } else {
    console.log("Not a number");
  }
}

function min(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

  let min = a[a.length - a.length];
  return min;
}

const max = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  let max = a[a.length - 1];
  return max;
};


let AdditionDiv = document.createElement("div");

let DivisionDiv = document.createElement("div");

let MultiplicationDiv = document.createElement("div");

let SubstractionDiv = document.createElement("div");

let MinMaxDiv = document.createElement("div");

document.body.appendChild(AdditionDiv);
document.body.appendChild(DivisionDiv);
document.body.appendChild(MultiplicationDiv);
document.body.appendChild(SubstractionDiv);
document.body.appendChild(MinMaxDiv);

AdditionDiv.classList.add("addition");
DivisionDiv.classList.add("division");
MultiplicationDiv.classList.add("multiplication");
SubstractionDiv.classList.add("subraction");
MinMaxDiv.classList.add("min-max");

let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");

AdditionDiv.appendChild(p);
DivisionDiv.appendChild(p1);
MultiplicationDiv.appendChild(p2);
SubstractionDiv.appendChild(p3);
MinMaxDiv.appendChild(p4);
MinMaxDiv.appendChild(p5);

let add = addition(22, -1);
let div = division(1, -1);
let multip = multiplication(1, -1);
let substract = substraction(-4, 2);



p.textContent = add;
p1.textContent = div;
p2.textContent = multip;
p3.textContent = substract;
p4.textContent = min(a);
p5.textContent = max(a);

if (add < 0) {
  p.style.background = "red";
} else if (add > 20) {
  p.style.background = "#006600";
} else {
  p.style.background = "#00ff00";
}

if (div < 0) {
  p1.style.background = "red";
} else if (div > 20) {
  p1.style.background = "#006600";
} else {
  p1.style.background = "#00ff00";
}


if (multip < 0) {
  p2.style.background = "red";
} else if (multip > 20) {
  p2.style.background = "#006600";
} else {
  p2.style.background = "#00ff00";
}

if (substract < 0) {
  p3.style.background = "red";
} else if (substract > 20) {
  p3.style.background = "#006600";
} else {
  p3.style.background = "#00ff00";
}

if (min(a) < 0) {
  p4.style.background = "red";
} else if (min(a) > 20) {
  p4.style.background = "#006600";
} else {
  p4.style.background = "#00ff00";
}

if (max(a) < 0) {
  p5.style.background = "red";
} else if (max(a) > 20) {
  p5.style.background = "#006600";
} else {
  p5.style.background = "#00ff00";
}

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

  let min = a[0];
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
  let max = a[9];
  return max;
};

let min2 = min(a);

let max2 = max(a);

console.log(min2);

console.log(max2);

let first = +prompt("Enter first number");
let second = +prompt("Enter second number");

let a = first + second;
let b = first - second;
let c = first / second;
let d = first * second;

if (second == 0) {
  alert("Error");
}

if (first < second) {
  let boolean = confirm("Are you sure you want to carry on with calculation?");
  if (boolean === true) {
    alert(b);
  }
}

if ((second === 0 || null || undefined) || (first === 0 ||null || undefined)) {
  alert("Error");
} else {
  alert(a + " " + b + " " + c + " " + d);
}

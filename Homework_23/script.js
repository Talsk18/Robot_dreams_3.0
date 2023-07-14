//1
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);
//2
let sum = 0;
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "number") {
    sum += a[i];
  } else {
    alert("There's not a number in the array");
    break;
  }
}
alert(sum);
//3 I didn't know how to do it, so I used bubbleSort
for (let i = 1; i < a.length; i++) {
  if (typeof a[i] != "number") {
    alert("There isn't a number in the array");
    break;
    
  }
  for (let j = 0; j < a.length - i; j++) {
    if (a[j] > a[j + 1]) {
      [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
}
max = a[9];
min = a[0];
alert(max + " " + min + " ");
//5
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("#");
  }
  console.log("\n");
}

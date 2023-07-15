//1
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);
let isPassed = true;
//2
let sum = 0;
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "number") {
    sum += a[i];
  } else {
    alert("There's not a number in the array");
    isPassed = false;
    break;
  }
}
if (isPassed === true) {
  alert(sum);
}

//3 I didn't know how to do it, so I used bubbleSort

if (isPassed === true) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  max = a[9];
  min = a[0];
  alert(max + " " + min + " ");
}


//5
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("#");
  }
  console.log("\n");
}

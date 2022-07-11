//lab 1.3.1
var a, b;

do {
  a = Number(prompt("Enter number a: "));
  console.log(a);
  b = Number(prompt("Enter number b: "));
} while (isNaN(a) || isNaN(b));

if (a * b > 0) {
  console.log("a has the same sign of b");
  document.write("a has the same sign of b");
} else if (a * b < 0) {
  console.log("a has the opposite sign of b");
  document.write("a has the opposite sign of b");
} else {
  console.log("do not enter a, b equals 0!");
  document.write("do not enter a, b equals 0!");
}
//lab 1.3.2
var m = Number(prompt("Enter m: "));

switch (m) {
  case 1:
  case 2:
  case 3:
    console.log("m in first quarter");
    document.write("m in first quarter");
    break;
  case 4:
  case 5:
  case 6:
    console.log("m in second quarter");
    document.write("m in second quarter");
    break;
  case 7:
  case 8:
  case 9:
    console.log("m in third quarter");
    document.write("m in third quarter");
    break;
  case 10:
  case 11:
  case 12:
    console.log("m in fourth quarter");
    document.write("m in fourth quarter");
    break;
  default:
    console.log("Invalid m! Please enter m again!");
    document.write("Invalid m! Please enter m again!");
    break;
}
//lab 1.3.3
let son = Number(prompt("Enter your number: "));
let sum = 0;
 var i;

for (i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log("Sum is: ", sum);
document.write("Sum is: ", sum);
//lab 1.3.4
    var na = Number(prompt("Enter n: "));
    var tong = 0;
    i;

    for (i = 2; i <= 2 * n; i += 2) {
    sum += 1 / i;
    }

    console.log(`sum is: ${sum.toFixed(2)}`);
    document.write(`sum is: ${sum.toFixed(2)}`);
    //lab 1.3.5
let x = Number(prompt("Enter x: "));
let n = Number(prompt("Enter n: "));
let T = 1,
  i;

for (i = 1; i <= n; i++) {
  T *= x;
}

console.log("Result is: " + T);
document.write("Result is: " + T);
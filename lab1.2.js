 //lab 1.2.1  
 var n = Number(prompt("Enter any number: "));

 // var abs = n >= 0 ? n : -n; // Solution 01
var abs = Math.abs(n); // Solution 02
 
 alert(`Absolute value of ${n} is: ` + abs);
 console.log(`Absolute value of ${n} is: ` + abs);
//Lab 1.2.2
 var a = Number(prompt("Enter a: "));
var b = Number(prompt("Enter b: "));
var result;

if (a == 0) {
result = "Equation have no solution";
} else {
// a != 0
if (b == 0) {
 result = "Equation have one solution x = 0";
} else {
 // b != 0
 result = "Equation have one solution x = " + -b / a;
}
}

alert(result);
console.log(result);

//lab 1.2.3
var math = Number(prompt("Enter math score: "));
var physic = Number(prompt("Enter physic score: "));
var chemistry = Number(prompt("Enter chemistry score: "));
var sum, average;

sum = math + physic + chemistry;
average = sum / 3;

console.log("Sum is: " + sum);
console.log("Average is: " + average);
alert("Sum is: " + sum);
alert("Average is: " + average);
//lab 1.2.4
const PI = 3.14;
var radius = Number(prompt("Enter radius: "));
var perimeter, area;

perimeter = PI * 2 * radius;
area = PI * radius * radius;

alert("perimeter of the circle is: " + perimeter);
alert("area of the circle is: " + area);
console.log("perimeter of the circle is: " + perimeter);
console.log("area of the circle is: " + area);
// lab 1.2.5
const TAX_RATE = 0.08;
var iPhonePrice = Number(prompt("Enter iPhoneX price: "));
var chargerPrice = Number(prompt("Enter charger price: "));
var discount = Number(prompt("Enter discount: "));
var taxPrice, totalPrice;

taxPrice = (iPhonePrice + chargerPrice) * TAX_RATE;
totalPrice = iPhonePrice + chargerPrice + taxPrice - discount;

alert("Total price is: " + totalPrice);
console.log("Total price is: " + totalPrice);
//lab 1.4.1
function divisor() {
    do {
    var n = Number(prompt('Enter condition base value greater than 0: '));
        switch (n) {
            case 0: 
            alert ('The input value must be larger than 1!! ^^');
        }
    } while (n <= 0);

    console.log (`Divisors of ${n}: `);

    for (var i = 1; i <= n; ++i) {
        switch (n % i) {
            case 0: 
                console.log (i);
        }
    };
};

divisor();
//lab1.4.2
// Check whether value "i" meets the requirements of a prime number
function isPrime(n) {

    for (var i = 2; i < n; i++) 
    {
     if (n % i == 0) return false;
    }
    return true;

  } 

// Print all prime numbers "i" less than the condition base value "n"
function main() {

    do {
      var n = Number(prompt('Enter condition base value larger than 2: '));
      switch (n) {
      case 0: 
            alert ('The input value must be larger than 2!! ^^');
        }
    } while (n <= 2);

    console.log(`Prime numbers less than ${n}: `);

    for(var i = 2; i < n; i++) 
     if (isPrime(i)) { // If "i = true", print "i"
        console.log(i);
       
     }
}; 

main();
//lab 1.4.3
var sum = 0;

function sumOfEvenDivisor() {
    do {
        var n = Number(prompt('Enter condition base value larger than 1: '));
        if (n <= 1) {
            alert ('Opps!! The input value must be larger than 1 ^^');
        };
      } while (n <= 1);

    for (var i = 2; i <= n; i += 2) {
        if (n % i === 0 && i % 2 === 0) {
           sum += i;
        }
    }
    return alert(`Sum of even numbers less than ${n}: ${sum}`);
};

sumOfEvenDivisor();

//lab 1.4.4
var count = 0;

function countEvenDivisor() {
    do {
        var n = Number(prompt('Enter condition base value larger than 1: '));
        if (n <= 1 || n * 1 != n) {
            alert ('Opps!! The input value must be a number and larger than 1 ^^');
        }
      } while (n <= 1 || n * 1 != n);

    for (var i = 2; i <= n; i += 2) {
        if (n % i === 0 && i % 2 === 0) {
            count += 1;
         }
     }
     return alert(`Number of even divisors of ${n}: ${count}`);
 };
 
 countEvenDivisor();
 //lab 1.4.5
 let myArray = [];
let na;

function input() {
    do {
    n = Number(prompt('Enter number of elements n: '));
        if (n < 0 || n * 1 != n) {
            alert ('The input value must be a number and larger than -1!!')
            }
        } while (n < 0 || n * 1 != n);
    
    for (let i = 0; i <= n ; ++i) 
    {
        myArray[i] = prompt(`Enter a value at Array[${i}]: `);
    }
};


function output() {
    for (let i = 0; i <= n ; ++i) {
        console.log( `myArray[${i}]: ${myArray[i]}`);
    }
}

input(myArray, n);
output(myArray, n);

//lab 1.4.6
let myArr = [];
let n;

function input() {
    do {
    n = Number(prompt('Enter number of elements n: '));
        if (n < 0 || n * 1 != n) {
            alert ('The input value must be a number and larger than -1!!')
            }
    } while (n < 0 || n * 1 != n);

    for (let i = 0; i <= n; i += 2) {
        myArray[i] = prompt(`Enter a value at EVEN Array[${i}]: `);
    }

    for (let i = 1; i <= n; i += 2) {
        myArray[i] = prompt(`Enter a value at ODD Array[${i}]: `);
    }
}

function output() {

    console.log(`Value of EVEN elements in myArray:`)

    for (let i = 0; i <= n ; i += 2) {
        console.log( `myArray[${i}]: ${myArray[i]}`);
    }

    if (n === 0) { 
        alert ('There is no value of ODD element in myArray :((');
    } else {
        console.log(`Value of ODD elements in myArray:`);}
    }
    //lab 1.4.7
    let myArra = [];
var sum;
let i;

function sumOfOddArray() {
    sum = 0;
    do {
        n = Number(prompt('Enter number of element n: '));
        if (n < 0 || n * 1 != n) {
            alert ('The input value must be a number and larger than -1!!')
            }
    } while (n < 0 || n * 1 != n);
    
    for (let i = 1; i <= n; i += 2) {
        do {
        myArra[i] = Number(prompt(`Enter a value at ODD Array[${i}]: `));
            if (myArra[i] * 1 != myArra[i]) {
                alert('Enter again!! The input must be a number data!!');
            }
        } while (myArra[i] * 1 != myArra[i]);

        sum += myArra[i];
    }
    console.log("Sum of ODD elements in myArray: " + sum);
}

sumOfOddArray();
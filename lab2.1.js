// EXERCISE 1:

class Car {
    constructor(name, color, capacity) {
        this.name = name;
        this.color = color;
        this.capacity = capacity;
    }
}

var _1stcar = new Car ("BMW", "Red", 4);
var _2ndcar = new Car ("Audi", "Green", 8);
var _3rdcar = new Car ("BMW", "Blue", 6);
var _4thcar = new Car ("Merc", "Green", 4);
var allCar = [_1stcar,_2ndcar,_3rdcar,_4thcar];

console.log("EXERCISE 1 - Car model list: ");
console.log(allCar);


// EXERCISE 2:
console.log ("EXERCISE 2 - List out BMW cars ")

function listOutBMWCar() {
    for (let i = 0; i < allCar.length; ++i) {
        if (allCar[i].name === "BMW") {
            console.log(allCar[i]);
        }
    }
};

listOutBMWCar();


// EXERCISE 3 
console.log ("EXERCISE 3 - Sum of the capacities of all cars: ");

let sum = 0;

function sumCarCapacities() {

    for (let i = 0; i < allCar.length; ++i) 
        {
            if (allCar[i].capacity * 1 === allCar[i].capacity) {
            sum += allCar[i].capacity;
        }
    }
    console.log ("Sum of cars' capacity: " + sum);

}

sumCarCapacities();


// EXERCISE 4:
console.log("EXERCISE 4 - Count green cars: ");

let count = 0;

function countGreenCars () {
    for (let i = 0; i < allCar.length; ++i) {
        if (allCar[i].color === "Green") {
            count += 1;
        }
    }
    console.log ("Number of GREEN CAR: " + count + " car(s)");
}

countGreenCars();


// EXERCISE 5 - Find the highest capacity
console.log("EXERCISE 5 - Find the highest capacity: ")

let max = allCar[0].capacity;

function findMaxCapacity() {
    for (let i = 0; i < allCar.length; ++i) {
        if (allCar[i].capacity > max) {
        max = allCar[i].capacity;
        };
    };
    console.log('Setting max capacity to ' + max);
};

findMaxCapacity();
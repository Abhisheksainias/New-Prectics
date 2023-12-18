let someNumber =55

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//******************* Operations*****************
console.log(2 + 4);
console.log("2" + 3);
console.log(2 + "5");
console.log(2 + 5 + "5");
console.log(2 % 7);

console.log(2 + 4 - (((5 * 8) / 6) % 8)); // don't use this type to code any condition
// this id not readle this is a messy type of code

console.log(+true); // that iis posible but dont use this tricky conversion
console.log(+""); // also don't use this tricky conversion


/*let num1, num2, num3

num1 = num2 = num3 = 2+2
console.log(num1, num2, num3);*/ //don't use 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let x = 3;  // incerement
const y = x++;

console.log(`x:${x}, y:${y}`);
// // JavaScript Fundamentals - Part 1
// // We'll write our code 

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");

// let firstName = "Gwen";
// console.log(firstName);

// let age = 20;
// console.log(age);
// age = 24; // Reassigning the variable
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// let lastName = "Lim";



// console.log("=== DATA TYPES ===");

// //Number
// age = 24;
// console.log(age)
// console.log(typeof age)

// //String
// let username = "Mark"

// console.log( username)
// console.log(typeof username)

// let javaScriptIsFun = true
// console.log(javaScriptIsFun)
// console.log( typeof javaScriptIsFun)

// let year;
// console.log(year);
// console.log(typeof year);


// // dynamic variable
// let dynamicVariable =23;
// console.log(dynamicVariable);
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //change into a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable)

// Basic Operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now -  2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math Operations");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 -8);
console.log("Multiplication:", 4 * 7);
console.log("Division", 15/3);
console.log("Exponentiation:", 2 ** 3);

//MAth with Strings!
const firstName = "Jonas";
const lastNAme = "Schmedtmann";
console.log("Hello " + "World" + " !");
console.log("I'am "+ 25 + " years old");

//////////
// Assignment Operators 
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; 
console.log(" x stats as :", x);

x += 10;;
console.log(" x starts as", x);

x*= 4;
console.log("x starts as:", x)

x /= 2;
console.log("x starts as :", x);


/////
console.log("=== COMPARISON OPERATORS===");
console.log("Age Comparison");
console.log(ageJonas > ageSarah);
console.log( ageSarah >= 18);
console.log(ageJonas <30);

console.log("NUmber comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log( 16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is an Adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is Older:", isJonasOlder);


console.log("Complex Comparison :");
console.log(now - 1991 > now - 2018);

// 1. Compaare age to 18
const gwenAge = 20;
console.log(gwenAge >= 18);

//2. Check if 100 is greater than 99


////////
// Operator Precedence
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah)
console.log(ageJonas, ageSarah, averageAge)



////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

console.log("Test Data 1:");
// Calculate BMI
const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);
console.log("Mark's BMI:", BMIMark1.toFixed(2));
console.log("John's BMI:", BMIJohn1.toFixed(2));

// Create markHigherBMI variable
const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log("Does Mark have a higher BMI?", markHigherBMI1);

// ------------------------------

// Test Data 2
console.log("Test Data 2:");
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculate BMI
const BMIMark2 = massMark2 / (heightMark2 ** 2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log("Mark's BMI:", BMIMark2.toFixed(2));
console.log("John's BMI:", BMIJohn2.toFixed(2));

// Create markHigherBMI variable
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log("Does Mark have a higher BMI?", markHigherBMI2);


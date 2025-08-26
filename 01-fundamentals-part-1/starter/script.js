
// // // JavaScript Fundamentals - Part 1
// // // We'll write our code 

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// // console.log("=== VARIABLES ===");

// // let firstName = "Gwen";
// // console.log(firstName);

// // let age = 20;
// // console.log(age);
// // age = 24; // Reassigning the variable
// // console.log(age);

// // const birthYear = 2005;
// // console.log(birthYear);

// // const PI = 3.1415
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // let lastName = "Lim";



// // console.log("=== DATA TYPES ===");

// // //Number
// // age = 24;
// // console.log(age)
// // console.log(typeof age)

// // //String
// // let username = "Mark"

// // console.log( username)
// // console.log(typeof username)

// // let javaScriptIsFun = true
// // console.log(javaScriptIsFun)
// // console.log( typeof javaScriptIsFun)

// // let year;
// // console.log(year);
// // console.log(typeof year);


// // // dynamic variable
// // let dynamicVariable =23;
// // console.log(dynamicVariable);
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now I'm a string";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change into a boolean
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable)

// // Basic Operators
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now -  2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math Operations");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 -8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division", 15/3);
// // console.log("Exponentiation:", 2 ** 3);

// // //MAth with Strings!
// // const firstName = "Jonas";
// // const lastNAme = "Schmedtmann";
// // console.log("Hello " + "World" + " !");
// // console.log("I'am "+ 25 + " years old");

// // //////////
// // // Assignment Operators 
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5; 
// // console.log(" x stats as :", x);

// // x += 10;;
// // console.log(" x starts as", x);

// // x*= 4;
// // console.log("x starts as:", x)

// // x /= 2;
// // console.log("x starts as :", x);


// // /////
// // console.log("=== COMPARISON OPERATORS===");
// // console.log("Age Comparison");
// // console.log(ageJonas > ageSarah);
// // console.log( ageSarah >= 18);
// // console.log(ageJonas <30);

// // console.log("NUmber comparisons:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log( 16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is an Adult:", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is Older:", isJonasOlder);


// // console.log("Complex Comparison :");
// // console.log(now - 1991 > now - 2018);

// // // 1. Compaare age to 18
// // const gwenAge = 20;
// // console.log(gwenAge >= 18);

// // //2. Check if 100 is greater than 99


// // ////////
// // // Operator Precedence
// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah)
// // console.log(ageJonas, ageSarah, averageAge)



// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark1 = 78;
// // const heightMark1 = 1.69;
// // const massJohn1 = 92;
// // const heightJohn1 = 1.95;

// // console.log("Test Data 1:");
// // // Calculate BMI
// // const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
// // const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);
// // console.log("Mark's BMI:", BMIMark1.toFixed(2));
// // console.log("John's BMI:", BMIJohn1.toFixed(2));

// // // Create markHigherBMI variable
// // const markHigherBMI1 = BMIMark1 > BMIJohn1;
// // console.log("Does Mark have a higher BMI?", markHigherBMI1);

// // // ------------------------------

// // // Test Data 2
// // console.log("Test Data 2:");
// // const massMark2 = 95;
// // const heightMark2 = 1.88;
// // const massJohn2 = 85;
// // const heightJohn2 = 1.76;

// // // Calculate BMI
// // const BMIMark2 = massMark2 / (heightMark2 ** 2);
// // const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
// // console.log("Mark's BMI:", BMIMark2.toFixed(2));
// // console.log("John's BMI:", BMIJohn2.toFixed(2));

// // // Create markHigherBMI variable
// // const markHigherBMI2 = BMIMark2 > BMIJohn2;
// // console.log("Does Mark have a higher BMI?", markHigherBMI2);


// ////////////////////////////////////
// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old
// ${job} !`;
// console.log(jonasNew);

// console.log( ` I'm ${2037 -1991} years old `);
// console.log(`Math works : ${2 + 3} equals five`)
// console.log(`Comparison too: ${5 > 3}`);


// // if else satatements
// const age = 16;

// if (age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log (`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// ///////////////////////////////
// /// Thruty and Falsey Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));


// /// Coding Challenge #2 BMI Comparison
// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:

// if (BMIMark > BMIJohn) {
// } else {    console.log( `Mark's BMI (${BMIMark}) os higher than John's(${BMIJohn})`)

//     console.log(`John's (${BMIJohn}) BMI is higher than Mark's(${BMIMark})`)
// }

// // Compare BMIs and create intelligent messages
// console.log(`Marks BMI {BMIMark} is highr than John's `)
// // Use template literals for beautiful output


//////
// Type Conversion and Coersion

const inputYear ="1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number" (weird but true!)

console.log(String(23), 23); // "23", 23
console.log(typeof String(23)); // "string"

console.log(Number("Jonas")); // NaN (Not a Number)
console.log(typeof NaN); // "number" (weird but true!)

console.log(String(23), 23); // "23", 23
console.log(typeof String(23)); // "string"


let n = "1" + 1; // What do you think?
n = n - 1; // What about now?
console.log(n);

console.log(2 + 3 + 4 + "5"); // Try to guess!
console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!

/////////
// Equality Operators: == vs. ===

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// Let's see what happens:
console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value



///////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense);



let drink2 ;
let age2 = 24;

if (age2 >= 20) {
    drink2 = "wine";
} else {
    drink2 = "water";
}

console.log(drink2);

score =100;
// when to use Tenary; for simple, two-option decisions 
const status = score >= 60 ? `pass` : `fail` ;
console.log(status);


// if else is better for complex logic with multiple statements 
if (score >= 60) { 
    console.log("Excellent!! :D");
} else{
    console.log(`Not good :(`);
}

// FINAL CHALLENGE 
////////////////////////////////////
// Coding Challenge #4


// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20; // percentage
let total = bill + tip;

console.log(`The bill is ${bill}, the tip is ${tip}, the total value is ${total}`);



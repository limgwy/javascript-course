console.log(`Part 2 is now working  `);

////////////////////////
// Function declaration
console.log("===FUNCTIONS===");

// Function declaration
function logger(){
console.log(`My name is Gwen`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(14, 7);
console.log(orangeJuice);

///////////////////
//Function expression
const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const age1 = calcAge(1991);
console.log(age1);


function introduce(firstName, lastName, age) {
    const introduction = `Hi! I'm ${firstName} ${lastName} my age is ${age} years old`;
    return introduction
}

console.log(introduce(`Gwyenth`, `Lim`, 20))
console.log(introduce(`Angel`, `Rain`, `40`))

/////////////////////
// Return Values and Scope

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0 ){
        return `${firstName} retires in ${retirement} years`
    }else {
        `${firstName} has already retired`
    }
}

console.log(yearsUntilRetirement(2005, "Bell"))

// Global Scope 
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(testScope);

function calcAverage(score1, score2, score3){
    return (score1 + score2 + score3 / 3);
}


// Function to check winner
function checkWinner(averageDolphins, averageKoalas) {
    if (averageDolphins >= 2 * averageKoalas) {
        return `Dolphins win ${averageDolphins} vs. ${averageKoalas}`;
    } else if (averageKoalas >= 2 * averageDolphins) {
        return `Koalas win ${averageKoalas} vs. ${averageDolphins}`;
    } else {
        return `No team wins.`;
 }}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
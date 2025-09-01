// // console.log(`Part 2 is now working  `);

// // ////////////////////////
// // // Function declaration
// // console.log("===FUNCTIONS===");

// // // Function declaration
// // function logger(){
// // console.log(`My name is Gwen`);
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const orangeJuice = fruitProcessor(14, 7);
// // console.log(orangeJuice);

// // ///////////////////
// // //Function expression
// // const calcAge = function (birthYear){
// //     return 2025 - birthYear;
// // }

// // const age1 = calcAge(1991);
// // console.log(age1);


// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi! I'm ${firstName} ${lastName} my age is ${age} years old`;
// //     return introduction
// // }

// // console.log(introduce(`Gwyenth`, `Lim`, 20))
// // console.log(introduce(`Angel`, `Rain`, `40`))

// // /////////////////////
// // // Return Values and Scope

// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0 ){
// //         return `${firstName} retires in ${retirement} years`
// //     }else {
// //         `${firstName} has already retired`
// //     }
// // }

// // console.log(yearsUntilRetirement(2005, "Bell"))

// // // Global Scope 
// // const globalVar = "I am global";

// // function testScope() {
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // console.log(testScope);

// // function calcAverage(score1, score2, score3){
// //     return (score1 + score2 + score3 / 3);
// // }


// // // Function to check winner
// // function checkWinner(averageDolphins, averageKoalas) {
// //     if (averageDolphins >= 2 * averageKoalas) {
// //         return `Dolphins win ${averageDolphins} vs. ${averageKoalas}`;
// //     } else if (averageKoalas >= 2 * averageDolphins) {
// //         return `Koalas win ${averageKoalas} vs. ${averageDolphins}`;
// //     } else {
// //         return `No team wins.`;
// //  }}

// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));


//   //////////////////
// //
// //Coding Challenge #2 Student Grade Manager

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// let total = 0;

// // Function to calculate average
// function calculateAverage(grades) {;
//     let sum = 0 
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];}
//    return sum/grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highest = grades[0];
// for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//         highest = grades[i];
//     }
// }
// return highest
// }


// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];
// for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//         total = grades[i];
//     }
// }
// return lowest
// }
// // Function to count passing students
// function countPassing(grades, passingGrade) {
//     let count  = 0; 
//    for (let i =0; i <grades.length; i++) {
//     if( grades[i] >= passingGrade) {
//         count ++;
//     }
//    }
//    return count 
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


////////////////
// HOUR 3
// Problems with Arrays fixed
const gwenArray = [
    "Gwyenth",
    "Lim",
    2025 - 2005,
    "student",
    ["Angel", "Rain", "Gel"]
];

console.log(gwenArray[0]); // "Gwyenth"
console.log(gwenArray[1]); // "Lim"

const gwenObject = {
    firstName: "Gwyenth",
    lastName: "Lim",
    age: 2025 - 2005,
    job: "student",
    friends:  ["Angel", "Rain", "Gel"]

};

console.log(gwenObject);

//Property Access Methods
// Dot notation

console.log(gwenObject.firstName);
console.log(gwenObject.lastName);
console.log(gwenObject.age);

//Bracket Notation
console.log(gwenObject["firstName"]);
console.log(gwenObject["lastname"]);
console.log(gwenObject["age"]);

const nameKey = "Name: ";
console.log(gwenObject["first" + nameKey]);

//Modifying Existing Properties
gwenObject.job = "Painter";
gwenObject["age"] = 24
console.log(gwenObject)

gwenObject.location = "Philippines";
gwenObject["twitter"] = "gwendumps"


//Objects vs Arrays Decision Making

const listOfYears = [2000, 2003, 2005];
const shoppingList = ["Pineapples", "Chocolate Drink", "Hungarian"];
const testScores =  [99, 83, 87, 64, 100];

//objects 
const car ={
    brand : "Mercedes",
    model : "gx5000",
    year : 2017,
    color : "Black",
};

//Objects can contain arrays, arrays can contain objects

const student = {
    name : "Jessica",
    grades: [95, 87, 92, 96],
    addres : {
        street : `21st Street`,
        city: `New York`

    },
}

console.log(student);
console.log(student.addres.city);


//Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Method - function inside object
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas.calcAge(2005));

const jonasImproved = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  calcAge: function () {
    console.log(this); 
     this.age = 2025 - this.birthYear; 
     return this.age
  },

   getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonasImproved.calcAge());
console.log(jonasImproved.getSummary());


///////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },
  // Generate profile summary
 getSummary: function () {
    this.calcAge(); // ensure age is updated
    return `
${this.firstName} ${this.lastName} 
 Age : ${this.age}
 Location: ${this.location}
 Interests: ${this.interests.join(", ")}
 Friends: ${this.friends.length} total (${this.getActiveFriends()} active)
 Status: ${this.isActive ? "Active" : "Inactive"}
    `;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());
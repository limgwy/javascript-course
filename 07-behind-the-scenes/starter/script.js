 'use strict';

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(varX);
// // console.log(letX); 
// // console.log(constX);

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// console.log(addDecl(2, 3)); 
// console.log(addExpr(2, 3)); 
// console.log(addArrow(2, 3)); 


// function first (){
//     second()
// }
// function second(){
//     console.log('In second');
// }

// first();

// function alpha () {
//     console.log('alpha:start');
//     console.log('alpha:end');
// }

// function beta() {
//     console.log('beta');
// }

// alpha();


// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();


// const name = 'GlobalName';

// function a() {
//   const name = 'FunctionName';
//   function b() {
//     console.log(name); // 'FunctionName' via scope chain
//   }
//   b();
// }

// a();


// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();
// person.nsme = 'Gwen';
// person.greet();

// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet(); 

// //detached function
// const greetFunction = person.greet;
// greetFunction();

// const button = document.querySelector('button');
// button.addEventListener('click', person.greet); // `this` becomes the button element!

// // Fix: use arrow function wrapper
// button.addEventListener('click', () => person.greet());
// // Or bind the method
// button.addEventListener('click', person.greet.bind(person));

// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name); 
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name); 
//   },
// };

// obj.regularMethod(); 
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); 

//Hour 2: The this Keyword & Arrow Functions
//SECTION 1
const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
 
person.greet();
person.name = 'Angel';
person.greet();
 
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();
 
const greetFunction = person.greet;
greetFunction();
 
const button = document.querySelector('button');
button.addEventListener('click', person.greet);
button.addEventListener('click', () => person.greet());
button.addEventListener('click', person.greet.bind(person));
 
//SECTION 2
const obj = {
  name: 'Object',
 
  regularMethod: function () {
    console.log('Regular:', this.name);
  },
 
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};
 
obj.regularMethod();
obj.arrowMethod();
 
const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};
 
quiz.regularMethod();
quiz.arrowMethod();
 
const timer = {
  name: 'Timer',
 
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;
 
    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
 
  startModern: function () {
    console.log(`${this.name} starting modern...`);
 
    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};
 
timer.start();
timer.startModern();
 
const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],
 
  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
 
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};
 
user.printHobbiesBad();
user.printHobbiesGood();
 
const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },
 
  arrowFunction: () => {
    console.log('Arrow function called');
  },
 
  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};
 
functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');
// Arrays, Functions and Objects
// return
const wallHeight = 80

function calculate(value) {
  //const newValue = value * 2.54
  /* console.log('The value in cm is: ' + value * 2.54 + ' cm');  */
  //return newValue;
  return value * 2.54
   
}
const width = calculate(100) ;
const height = calculate(wallHeight);
const dimensions = [width, height];
console.log(dimensions);

/* Function Definition/Declaration */
function addValues(num1, num2) {
  return num1 + num2
}
const firstValue = addValues(3,4);
const secondValue = addValues(12, 34);

/* Function Expressions */
const  add = function(num1, num2) {
    return num1 + num2
};
//const thirdValue = add(5,6)
const values = [firstValue, secondValue, add(5,6)]
console.log(values)

/* Arrow Functions */
const multiply = (num1, num2) => num1 * num2
console.log(multiply(67, 7))



/* Objects  */
const person = {
  name: 'john',
  lastName: 'peters',
  siblings: ['anna', 'donald', 'amanda'],
  greeting: function () {
    console.log('Hello my name is Michael');
  }
};
const age = person.age;
console.log(age);
person.name ='bob'
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

/* Conditional Statements */ 
const value = false
if(!value) {
  console.log("value is false");
}
 
/* String Properties and Methods */
 let fullName = ' Michael Jordan'
 let result = fullName.length
 console.log(result)
 console.log(fullName.length)
 console.log(fullName.toLowerCase());
 console.log(fullName.toUpperCase());
 console.log(fullName.charAt(0));
 console.log(fullName.charAt(fullName.length - 1));
 console.log(fullName.indexOf('M'));
 console.log(fullName.indexOf('a'));
 console.log(fullName)
  console.log(fullName.trim())
  console.log(fullName.startsWith(' Michael'))
  // How to Chain Methods
console.log(fullName.trim().toLowerCase().startsWith('mich'))
console.log(fullName.includes('rdan'));
console.log(fullName.slice(1,6));
console.log(fullName.slice(-3));

/* Template Literals */
const nameOfUser = 'mike'
const ageofname = 25;
//Former way
const sentence = "Hey it's " + nameOfUser + " and he is " + age + " years old"
// Use of Template Literls i.e. Backticks and Interpolation
const val = ` Hey it's ${nameOfUser} and he is ${ageofname} years old. And here is a simple calculation ${24 + 34} `

console.log(sentence)
console.log(val)

/* Array Properties and Methods */ 
// concat
 let names = ['Kene', 'Joseph', 'Jonathan', 'Olga']
 const lastNames = ['pepper', 'onion', 'tomato']
 const allNames = names.concat(lastNames)
 console.log(allNames)
 // reverse
 console.log(allNames.reverse())
 // splice
 const specificNames = allNames.splice(2,1)
 console.log(specificNames);
 console.log(allNames);

 /* Arrays and for loops */
 const identity = ['anna', 'susy', 'boban', 'Klay', 'Ja']
 const fullIdentity = 'shakeandbake';
 let newArray = [];
 // for loop
  for(let i = 0; i < identity.length || i <= identity.length - 1; i++ ) {
  console.log(i);
  console.log(identity[i]);
  //newArray.push(identity[i])
  //newArray.push(`${names[i]} ${fullIdentity}`) OR
  const fulIdentity = `${identity[i]} ${fullIdentity}`
  newArray.push(fulIdentity)
 }
 console.log(identity);
 console.log(newArray)

 /* Functions, return, if , arrays, for loops */ 
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
     //console.log(arr[i]);
     total += arr[i]
  }
  if (total > 100) {
console.log(`Whoa! You are spending too much`);
return total;
  }
  console.log(`You are good, total is less than 100`);
  
  //console.log(total);
  return total;
  
}
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 400, 900]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
});

/* Reference vs Value */
let number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let persons = {name: 'Mike'};
//let person2 = person;
let person2 = {...person};
person2.name = 'Nike';
console.log(`the name of the first person is ${persons.name}`);
console.log(`the name of the second person is ${person2.name}`);

/* Null and Undefined */
let digit = 20 + null; // 20 + 0
console.log(digit);
let digit2 = 20 + undefined
console.log(digit2);

/* Truthy and Falsy */
const text = 'Justin'
if(text) {
  console.log('Hey, the value is Truthy');
} else {
  console.log('Hey, the value is Falsy' );
}

/* Ternary Operator */
let valuess = 1 < 0
valuess ? console.log('value is true'): console.log('value is false');;

function calculator() {
  const name = 12
  const age = 265
  
}
calculator()
console.log(name);

/* Variable Lookup */
const globalNumber = 5;

function adds(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result
}
console.log(adds(3,4));

/* Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens */
function morning(name) {
 
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
 
  return `Good morning ${name.repeat(3)}`;
}

function greet(name, cb) {
  //cb()
  const myName = 'Michael'
  console.log(`${cb(name)}, my name is ${myName}`);
}
greet('bobo', morning)
greet('peter', afternoon)
  




/* function greetMorning(name) {
  const myName = 'Michael'
  console.log(`Good morning ${name}, my name is ${myName}`);
}
function greetAfternoon(name) {
  const myName = 'Michael'
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}
greetMorning('bobo')
greetAfternoon('Elon')
*/

/* forEach */
  /*const people = [
  {nameOf: 'Tommy', age: 25, position: 'developer'},
  {nameOf: 'Arthur', age: 32, position: 'designer'},
  {nameOf: 'John', age: 24, position: 'boss'},
]

function showPerson(person) {
//console.log(person)
console.log(person.position.toUpperCase());
}

//people.forEach(showPerson)
people.forEach(function(item) {
console.log(item.position.toUpperCase());
}); */

/* map */
const people = [
  {nameOf: 'Tommy', age: 25, position: 'developer'},
  {nameOf: 'Arthur', age: 32, position: 'designer'},
  {nameOf: 'John', age: 24, position: 'boss'},
  {nameOf: 'Ada', age: 21, position: 'boss'},
]

const ages = people.map(function(person) {
  //console.log(person);
  return person.age + 20
});
const newPeople = people.map(function(person) {
  return {
    firstName: person.nameOf.toUpperCase(),
    oldAge: person.age + 20,
  
  };
});

const burrito = people.map(function(person) {
  return `<h1>${person.nameOf}</h1>`;

})

console.log(ages)
console.log(newPeople)
document.body.innerHTML = burrito.join('')
console.log(burrito)

/* Filter */  
const peoples = [
  {nameOf: 'Tommy', age: 25, position: 'developer'},
  {nameOf: 'Arthur', age: 32, position: 'designer'},
  {nameOf: 'John', age: 24, position: 'boss'},
  {nameOf: 'Ada', age: 21, position: 'boss'},
];
const youngPeople = peoples.filter(function(person) {
  return person.age <=25
});

const developers = peoples.filter(function(person) {
  return person.position === 'developer'
})
console.log(youngPeople);
console.log(developers)

/* Find */
const individuals = [
  {nameOf: 'Tommy', age: 25, position: 'developer', id:1},
  {nameOf: 'Arthur', age: 32, position: 'designer', id: 2},
  {nameOf: 'John', age: 24, position: 'boss', id: 3},
  {nameOf: 'Ada', age: 21, position: 'boss', id: 4},
];

const tortilla = ['Tommy', 'Arthur', 'John'];
console.log(
  tortilla.find(function(name) {
  return name === 'Tommy'
})
);

const individualss = individuals.find(function(person) {
  return person.id === 3;
});
//console.log(individualss);
console.log(individualss.nameOf);

const individualss2 = individuals.filter(function(person) {
  return person.id === 3;
});

console.log(individualss2[0].nameOf);

/* Reduce */
const folks = [
  {nameOf: 'Tommy', age: 25, position: 'developer', id:1, salary: 200},
  {nameOf: 'Arthur', age: 32, position: 'designer', id: 2, salary: 300},
  {nameOf: 'John', age: 24, position: 'boss', id: 3, salary: 500},
  {nameOf: 'Ada', age: 21, position: 'boss', id: 4, salary: 500},
];

const total = folks.reduce(function(acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money ${currItem.salary}`);
  acc += currItem.salary

  return acc
}, 500);

console.log(total)

/* Math Object */
// Rounding Down
// let number4 = 4.5678
// let result4 = Math.floor(number4);
// console.log(result4);

let number4 = 4.5678;
let result4 = Math.floor(8.9999);
console.log(result4);

//Rounding Up
let number5 = 4.1222;
let result5 = Math.ceil(number5);
console.log(result5);

//Square Root
let number6 = 89;
let result6 = Math.sqrt(number6);
console.log(result6);

//PI
let result7= Math.PI
console.log(result7);

//Min
let result8 = Math.min(47,67,8) 
console.log(result8);

//Max
let result9 = Math.max(47,67,8) 
console.log(result9);

// Random Numbers
//let result10 =Math.floor(Math.random() * 10)
//console.log(result10);
let result10 =Math.ceil(Math.random() * 10)
console.log(result10); /* OR */
let result11 =Math.floor(Math.random() * 10 + 1)
//console.log(result10);


/* Date Object */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const date = new Date()
//const date = new Date('1/1/2020')

const month = date.getMonth();
console.log(months[month])

const day = date.getDay()
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const dateSentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}. `

console.log(dateSentence);

document.body.innerHTML = dateSentence




/* DOM */






























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










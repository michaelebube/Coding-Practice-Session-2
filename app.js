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
const val = ` Hey it's ${nameOfUser} and he is ${age} years old. And here is a simple calculation ${24 + 34} `

console.log(sentence)
console.log(val)







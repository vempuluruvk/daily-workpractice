// Variables and data types
let number = 10;
const PI = 3.14;
let message = "Hello, JavaScript!";
let isTrue = true;

// Operations
let sum = number + 5;
let concatMessage = message + " Have a nice day!";

console.log(number, PI, message, isTrue);
console.log(sum, concatMessage);

// Function definition
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Function invocation
  let greeting = greet("Alice");
  console.log(greeting);

  
  let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold outside.");
}

// Array creation and manipulation
let colors = ['red', 'green', 'blue'];
colors.push('yellow');
colors[1] = 'purple';

// Looping through an array
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}
// Object creation and usage
let person = {
    name: 'John',
    age: 30,
    isStudent: false
  };
  
  // Accessing object properties
  console.log(person.name);
  console.log(person.age);
  console.log(person.isStudent);

  // Promise example
function delay(milliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  delay(2000)
    .then(() => console.log("Two seconds have passed."));
  
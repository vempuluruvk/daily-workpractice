// Using async/await with Fetch API
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();

  // Using higher-order functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log('Sum:', sum);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Destructuring and arrow functions
const user = { name: 'Alice', age: 28, country: 'Wonderland' };

const { name, age } = user;
console.log(`Name: ${name}, Age: ${age}`);

const greeting = (userName) => `Hello, ${userName}!`;
console.log(greeting(name));

// Classes and modules
// File: calculator.js
class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
  }
  
  export default Calculator;
  
  // File: app.js
  import Calculator from './calculator.js';
  
  const calc = new Calculator();
  console.log('Addition:', calc.add(5, 3));
  console.log('Subtraction:', calc.subtract(10, 4));

  // Error handling with promises
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an error
      setTimeout(() => {
        reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error:', error));

    
    
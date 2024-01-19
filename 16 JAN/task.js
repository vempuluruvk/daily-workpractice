// DOM manipulation
const list = document.getElementById('list');
const newItem = document.createElement('li');
newItem.appendChild(document.createTextNode('Grapes'));
list.appendChild(newItem);

// Remove the second item
const secondItem = list.getElementsByTagName('li')[1];
secondItem.parentNode.removeChild(secondItem);

// Fetching data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Work with the data
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
// Template literals
const name = 'John';
const age = 30;

const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Asynchronous operation with setTimeout
console.log('Start');
setTimeout(() => {
  console.log('Inside setTimeout after 2 seconds');
}, 2000);
console.log('End');

// Try...Catch for error handling
try {
    // Code that might throw an error
    const undefinedVar = someUndefinedVariable;
  } catch (error) {
    console.error('Error:', error);
  }

  // Event handling
const button = document.getElementById('clickButton');

button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});
  
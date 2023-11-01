// Function composition example
const add = (x, y) => x + y;
const multiplyBy2 = (x) => x * 2;
const subtract5 = (x) => x - 5;

const compose = (...functions) => {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const composedFunction = compose(subtract5, multiplyBy2, add);

console.log(composedFunction(10)); // Output: 15

// Recursion example
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120

  
  // Callback function example
function fetchData(url, callback) {
    // Simulating fetching data from a URL
    const data = fetch(url);
    callback(data);
  }
  
  function processFetchedData(data) {
    // Process data here
    console.log('Processing data:', data);
  }
  
  fetchData('https://api.example.com/data', processFetchedData);

  
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];
  
  const userNames = users.map(user => user.name);
  console.log('User names:', userNames);
  
  const userSummaries = users.map(user => ({
    userName: user.name,
    summary: `This is ${user.name}, aged ${user.age} years.`
  }));
  console.log('User summaries:', userSummaries);

  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];
  
  const userNames = users.map(user => user.name);
  console.log('User names:', userNames);
  
  const userSummaries = users.map(user => ({
    userName: user.name,
    summary: `This is ${user.name}, aged ${user.age} years.`
  }));
  console.log('User summaries:', userSummaries);
  
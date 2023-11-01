function rotateLeft(string, n) {
    let part1 = string.substring(n, string.length);
    let part2 = string.substring(0, n);
  
    let output = part1 + part2;
    return output;
  }
  
  let string = "javascript";
  let n = 2;
  
  console.log(rotateLeft(string, n));

  const findDays = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
  
    let difference = d2.getTime() - d1.getTime();
  
    let output = difference / (1000 * 3600 * 24);
  
    return Math.floor(output);
  };
  
  let date1 = "11/01/2021";
  let date2 = "11/03/2021";
  
  console.log(findDays(date1, date2));

  let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
  ];
  
  const extractValues = (arr, property) => {
    let output = [];
  
    for (let i = 0; i < arr.length; i++) {
      output.push(arr[i][property]);
    }
  
    return output;
  };
  
  let result = extractValues(input, "name");
  console.log(result);

  const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// take the input from the user
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
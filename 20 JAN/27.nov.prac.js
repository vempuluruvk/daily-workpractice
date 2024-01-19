function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));

  function checkValue(a, b) {
    if (a === 1)
      if (b === 2)
        console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
  }

  function checkValue(a, b) {
    if (a === 1)
      if (b === 2)
        console.log("a is 1 and b is 2");
      else
        console.log("a is not 1");

  }


  // Creating array
let arr = [4, 8, 7, 13, 12]

// Creating variable to store the sum
let sum = 0;

// Calculation the sum using forEach
arr.forEach(x => {
	sum += x;
});

// Prints: 44
console.log("Sum is " + sum);


// Creating array
let arr = [4, 8, 7, 13, 12]

// Using reduce function to find the sum
let sum = arr.reduce(function (x, y) {
	return x + y;
}, 0);

console.log("Sum using Reduce method: " + sum);


// Creating array
let arr = [4, 8, 7, 13, 12]

// Creating variable to store the sum
let sum = 0;

// Running the for loop
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log("Sum is " + sum) // Prints: 44


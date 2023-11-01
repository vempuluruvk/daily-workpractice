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

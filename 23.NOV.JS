let Arr = [1, 4, 56, 43, 67, 98];

function gfg_Run() {
	let strArr = Arr.map(function (e) {
		return e.toString()
	});

	console.log("Array - " + strArr +
		"\ntypeof(Array[0]) - " + typeof (strArr[0]));
}

gfg_Run();


const Arr = [1, 2, 3, 4, 5];
const strArr = [];

Arr.forEach(function (num) {
	strArr.push(String(num));
});
console.log(
	"Array - " + strArr +
	"\ntypeof(Array[0]) - "
	+ typeof strArr[0]
);


// Array of object
let arr = [
	{
		a: 10,
		b: 25
	},
	{
		a: 30,
		b: 5
	},
	{
		a: 20,
		b: 15
	},
	{
		a: 50,
		b: 35
	},
	{
		a: 40,
		b: 45
	},
];

// Returns max value of
// attribute 'a' in array
function fun(arr) {
	let maxValue = Number.MIN_VALUE;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].a > maxValue) {
			maxValue = arr[i].a;
		}
	}
	return maxValue;
}

let maxValue = fun(arr);
console.log(maxValue);


let arr = [
	{
		a: 10,
		b: 25
	},
	{
		a: 30,
		b: 5
	},
	{
		a: 20,
		b: 15
	},
	{
		a: 50,
		b: 35
	},
	{
		a: 40,
		b: 45
	},
];

let maxValue = Math.max.apply(null,
	arr.map(function (o) { return o.a; }));

console.log(maxValue);


let arr = [12, 25, 31, 23, 75, 81, 100]
console.log(arr.sort())


// Declare and initialize original array
let marks = [12, 25, 31, 23, 75, 81, 100];

// Print Before Sorting Array 
console.log("Original Array");
console.log(marks);

// Call sort function
marks.sort();

console.log("After Sorting in Ascending Order");

// Print Sorted Numeric Array 
console.log(marks);


// Swapping array using temporary variable
let array = [10, 2, 5, 12, 7];
temp = array[1];
array[1] = array[0];
array[0] = temp;

console.log("Array after swapping : " + array);

// Swapping first two elements of the array
let array = [10, 2, 5, 12, 7];
[array[0], array[1]] = [array[1], array[0]];
console.log("Array after swapping : " + array);

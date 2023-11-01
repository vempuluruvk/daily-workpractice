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

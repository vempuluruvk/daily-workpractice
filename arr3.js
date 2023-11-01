let myArray = new Array(5);
for (let i = 0; i < myArray.length; i++) {
	myArray[i] = "Hello";
}
console.log(myArray);


let myArray = new Array(5);
myArray = [...Array(5)].map(() => 'Hello');
console.log(myArray);

let myArray = [];
for (let i = 0; i < 10; i++) {
	myArray.push(0);
}
console.log(myArray);

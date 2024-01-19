const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; 
const result = arr.slice(0, n); 
console.log(result); // Output: [1, 2, 3]

const arr = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
const n = 2; 
const result = arr.slice(0, n); 
console.log(result); // Output: ['apple', 'banana'] 

const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; // Number of elements to extract 
const result = []; 
for (let i = 0; i < n; i++) { 
	result.push(arr[i]); 
} 
console.log(result); // Output: [1, 2, 3]


const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; 
const result = arr.slice(0, n); 
console.log(result); // Output: [1, 2, 3]

const arr = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
const n = 2; 
const result = arr.slice(0, n); 
console.log(result); // Output: ['apple', 'banana'] 

const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; // Number of elements to extract 
const result = []; 
for (let i = 0; i < n; i++) { 
	result.push(arr[i]); 
} 
console.log(result); // Output: [1, 2, 3]



let a = 'hello';
a[0] = 'H';
console.log(a);

const a = 'hello';
const b = new String('hello');

console.log(a); 
console.log(b); 

console.log(typeof a); 
console.log(typeof b); 



const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

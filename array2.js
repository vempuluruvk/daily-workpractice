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

const fruits = ['apple', 'banana', 'cherry', 'orange']; 
const index = fruits.indexOf('cherry'); 
console.log(index); 

const array = [10, 20, 30, 40]; 
const index = array.findIndex(num => num > 25); 
console.log(index); 

const arraynumbers = [10, 20, 30, 40]; 
let index = -1; 
for (let i = 0; i < arraynumbers.length; i++) { 
	if (arraynumbers[i] === 30) { 
		index = i; 
		break; 
	} 
} 
console.log(index); 


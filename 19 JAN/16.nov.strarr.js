let a = 'vamsi';
a[0] = 'r';
console.log(a);

const a = 'vamsi';
const b = new String('krishna');

console.log(a); 
console.log(b); 

console.log(typeof a); 
console.log(typeof b); 


const text1 = 'krish';
const text2 = 'vamshi';
const text3 = '     vempuluru    ';

const result1 = text1.concat(' ', text2);
console.log(result1); 

const result2 = text1.toUpperCase();
console.log(result2); 

const result3 = text3.trim();
console.log(result3); 

const result4 = text1.split();
console.log(result4);

const result5= text1.slice(1, 3);
console.log(result5);


const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; 
const result = arr.slice(0, n); 
console.log(result); 

const arr = ['v', 'bc', 'o', 'pe', 'mn']; 
const n = 2; 
const result = arr.slice(0, n); 
console.log(result); 

const arr = [1, 2, 3, 4, 5, 6]; 
const n = 3; 
const result = []; 
for (let i = 0; i < n; i++) { 
	result.push(arr[i]); 
} 
console.log(result); 


let fruits = ['apple', 'orange', 'banana'];

console.log(fruits[0]);  
console.log(fruits[1]);  
console.log(fruits[2]);


async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 2000);
    });
  }
  
  async function fetchDataAndProcess() {
    try {
      let data = await fetchData();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchDataAndProcess();
  
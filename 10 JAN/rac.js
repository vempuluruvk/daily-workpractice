const testArray = [1, 2, 3, 4, 5];
const res = testArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
	return acc + curr;
  }
  return acc;
}, 0);
console.log(res);

const arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(Math.floor(Math.random() * 1000));}

  const arr = [1, 2, 3];
const object1 = { x: 1, y: 2, z: 3 };
console.log([...arr, ... object1]);

fetch('https://api.example.com/data')
  .then(response => {
	if (!response.ok) {
  	throw new Error('Network response was not ok');
	}
	return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));

  const promise1 = Promise.resolve(One);
const promise2 = Promise.resolve(Two);
Promise.all([promise1, promise2]).then(([result1, result2]) => console.log(result1 + ' ' + result2));

function counter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  const increment = counter();
  increment(); 
  increment(); 
  increment(); 

  
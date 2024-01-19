let numbers = [1, 2, 3, 4, 5];


let squaredNumbers = numbers.map(function(num) {
  return num * num;
});

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

let sum = numbers.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0);

console.log(squaredNumbers); 
console.log(evenNumbers);     
console.log(sum);             



let colors = ['red', 'green', 'blue'];

let [firstColor, secondColor] = colors;

console.log(firstColor);  
console.log(secondColor);  


let button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Button clicked!");
});


for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  let fruits = ["apple", "orange", "banana"];
  for (let fruit of fruits) {
    console.log(fruit);
  }

  
  function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 5);
  console.log(result);

  
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    
    class Animal {
        constructor(name) {
          this.name = name;
        }
      
        makeSound() {
          console.log('Some generic sound');
        }
      }
      
      class Dog extends Animal {
        makeSound() {
          console.log('Woof! Woof!');
        }
      }
      
      let myDog = new Dog('Buddy');
      myDog.makeSound();

    
const multiplyBy = (factor) => (number) => number * factor;

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(multiplyBy(2));
let sum = doubledNumbers.reduce((acc, val) => acc + val, 0);

console.log(doubledNumbers);  /
console.log(sum);            

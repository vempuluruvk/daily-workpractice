
// filter duplicate items
let arr1 = [1, 5, 3]; 
let arr2 = [4, 5, 6]; 
let newArr = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0)); 
console.log(newArr);

// merge
let arr1 = [1, 2, 3, 4, 5, 6]; 
let arr2 = [3, 4, 5, 7]; 
let arr = arr1.concat(arr2); 
let mergedArr = [...new Set(arr)] 
console.log(mergedArr);


let Person1= new Person('Jenni', 'clerk', 1986); 
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 

Person1.calculateAge(); 
Person2.calculateAge(); 


 
function toGreet() { 
	console.log("Hello There!"); 
} 

let myObj = { 

	
	greet: toGreet, 

	
	byWhom: function() { 
		console.log(" - GeeksforGeeks.org"); 
	} 
} 

myObj.greet(); 
myObj.byWhom();

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
  
    animal.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
  
    animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
  
    animal.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  
    return animal
  }
  
  const leo = Animal('Leo', 7)
  const snoop = Animal('Snoop', 10)

  class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
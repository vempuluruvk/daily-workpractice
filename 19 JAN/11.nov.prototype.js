
function Person () {
    this.name = 'John',
    this.age = 23
}
const person1 = new Person();
const person2 = new Person();

Person.prototype.gender = 'male';

console.log(Person.prototype);

console.log(person1.gender);
console.log(person2.gender);


function Person() {
    this.name = 'vamsi'
}
Person.prototype.age = 28;

const person1 = new Person();

console.log(person1.age); 

Person.prototype = { age: 25 }

const person3 = new Person();

console.log(person3.age); 
console.log(person1.age);

function constructor 
function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 

Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 


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


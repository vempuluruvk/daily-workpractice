class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const myDog = new Dog("Buddy");
  myDog.speak();

  
  "use strict";

x = 10;
var y = 20;
delete y;
var octalNum = 0123; 


function divide(x, y) {
    try {
      if (y === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return x / y;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Output: Error: Cannot divide by zero.

  
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  fetchData();

  
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.displayInfo = function () {
    console.log(`Car: ${this.make} ${this.model}`);
  };
  
  const myCar = new Car("Toyota", "Camry");
  myCar.displayInfo();

  function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
      },
    };
  }
  
  const person1 = createPerson("Alice", 25);
  person1.greet();

  
  class BankAccount {
    #balance = 0; // Private field
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  }
  
  const account = new BankAccount();
  account.deposit(1000);
  account.withdraw(500);
  
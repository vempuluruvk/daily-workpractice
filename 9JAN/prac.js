const obj = {
    name: "Conner",
    age: 27,
    greet: () => {
      console.log(`Hey, my name is ${this.name}`);
    },
  };
  obj.greet();

  const object1 = {
    prop1: "value1",
    prop2: {
      prop3: "value3",
    },
  };
   const newObj = { ...obj };
  newObj.prop2.prop3 = "newValue3";
  console.log(object1.prop2.prop3);

  class Bird {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
   class Crow extends Bird{
    speak() {
      super.speak();
      console.log(`${this.name} sings.`);
    }
  }
   const crow = new Crow("Tim");
  crow.speak();

  const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, num) => total + num);
console.log(sum / arr.length);

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
fetch('https://api.examplewebsite.com/login', {
  method: 'POST',
  body: JSON.stringify({ username, password })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
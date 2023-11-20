let a = 'hello';
a[0] = 'H';
console.log(a);

const a = 'hello';
const b = new String('hello');

console.log(a); 
console.log(b); 

console.log(typeof a); 
console.log(typeof b); 


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data successfully fetched!");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


    
    
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
    
    const dog = new Dog('Buddy');
    dog.speak();




    const person = { name: 'Alice', age: 25, occupation: 'Engineer' };

for (const property in person) {
    if (person.hasOwnProperty(property)) {
        console.log(`${property}: ${person[property]}`);
    }
}


const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});



const delayedMessage = () => {
    console.log('This message is delayed by 2 seconds.');
  };
  
  setTimeout(delayedMessage, 2000);



  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];
  
  const userNames = users.map(user => user.name);
  console.log('User names:', userNames);
  
  const userSummaries = users.map(user => ({
    userName: user.name,
    summary: `This is ${user.name}, aged ${user.age} years.`
  }));
  console.log('User summaries:', userSummaries);

  

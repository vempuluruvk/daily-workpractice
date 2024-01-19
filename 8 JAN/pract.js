const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);

let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i);

const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  const func = object1.c;
  func();

  function greetHello(name) {
    return `Hello, ${name}!`;
  }
  console.log(greetHello("Brian"));

  function fetchData(callback) {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error));
  }
   fetchData(function (error, data) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Data:', data);
    }
  });

  const person = {
    firstName: "Helen",
    lastName: "Ryan",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  console.log(person.getFullName());

  setTimeout(function () {
    console.log("This will be executed after 3 seconds");
  }, 3000);
  clearTimeout()

  const testArray = [1, 2, 3];
testArray = [4, 5, 6];
console.log(testArray);
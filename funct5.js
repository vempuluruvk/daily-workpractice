// default parameters
function greet(name = "John Doe") {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, John Doe!
greet("Jane Smith"); // Hello, Jane Smith


function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
  }
  
  console.log(multiply(5)); // 5
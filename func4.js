// higher order function

function performOperation(a, b, operation) {
    return operation(a, b);
}

let result = performOperation(5, 10, addNumbers);
console.log(result);  


function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); 
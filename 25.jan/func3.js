// closure function

function createCounter() {
    let count = 0;
    return function() {
      return count++;
    }
  }
  const myCounter = createCounter();
  console.log(myCounter()); // Output: 0
  console.log(myCounter()); 

  
  
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41
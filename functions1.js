// call back function

function multiplyByTwo(n, callback) {
    var result = n * 2;
    callback(result);
  }
  
  function logResult(result) {
    console.log(result);
  }
  
  multiplyByTwo(5, logResult)

  
  
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
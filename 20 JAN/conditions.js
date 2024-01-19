function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));

  function checkValue(a, b) {
    if (a === 1)
      if (b === 2)
        console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
  }

  function checkValue(a, b) {
    if (a === 1)
      if (b === 2)
        console.log("a is 1 and b is 2");
      else
        console.log("a is not 1");
  }
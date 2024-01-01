function checkValidity(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }
  
  //Test code
  console.log(checkValidity(3, 4, 1));
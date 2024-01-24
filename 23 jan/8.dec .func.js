function Person() {
    // Some choose `that` instead of `self`.
    // Choose one and be consistent.
    const self = this;
    self.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.age++;
    }, 1000);
  }


  function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }
  
  const p = new Person();


  
  
  function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);


  function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  
  const gens= idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value);

// passing arguments into generators
  function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  const gen = logGenerator();
  
  // the first call of next executes from the start of the function
  // until the first yield statement
  gen.next(); // 0
  gen.next("pretzel"); // 1 pretzel
  gen.next("california"); // 2 california
  gen.next("mayonnaise"); // 3 mayonnaise
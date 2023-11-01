class Polygon {
    constructor() {
      this.name = 'Polygon';
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);

  class Person {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const otto = new Person("Otto");
  
  otto.introduce()
  
  
  class DateFormatter extends Date {
    getFormattedDate() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
  }
  
  console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());

  function OldStyleClass() {
    this.someProperty = 1;
  }
  OldStyleClass.prototype.someMethod = function () {};
  
  class ChildClass extends OldStyleClass {}
  
  class ModernClass {
    someProperty = 1;
    someMethod() {}
  }
  
  class AnotherChildClass extends ModernClass {}

  
  
  function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));



class SomeClass extends class {
    constructor() {
      console.log("Base class");
    }
  } {
    constructor() {
      super();
      console.log("Derived class");
    }
  }
  
  new SomeClass();

  
  class ParentClass {
    constructor() {
      return 1;
    }
  }
  
  console.log(new ParentClass()); // ParentClass {}
  // The return value is ignored because it's not an object
  // This is consistent with function constructors
  
  class ChildClass extends ParentClass {
    constructor() {
      super();
      return 1;
    }
  }
  
  console.log(new ChildClass());
const object1 = {  
    a: 1,  
    b: 2,  
    c: 3  
  };  
  const object3= {  
    g: 1,  
    h: 2,  
    i: 3  
  };    
    
  const object2 = Object.assign({c: 4, d: 5}, object1);  
  const object4 = Object.assign({g: 34, h: 25}, object3);  
  console.log(object2.c, object2.d);  
  console.log(object4.g, object4.h);  

  const people = {  
    printIntroduction: function ()  
     {  
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
    }  
  };  
  const me = Object.create(people);  
  me.name = "Marry"; // "name" is a property set on "me", but not on "person"  
  me.isHuman = true; // inherited properties can be overwritten  
  me.printIntroduction();  

  
  
  let animal = {  
    eats: true  
  };  
     // create a new object with animal as a prototype  
  let rabbit = Object.create(animal);  
  alert(Object.getPrototypeOf(rabbit) === animal);  
    
  Object.setPrototypeOf(rabbit, {}); 

  const object1 = {  
    a: 'Rahul',  
    b: 0,  
    c:false  
  };  
  console.log(Object.values(object1)); 

  const object1 = {  
    property1: 103  
  };  
    
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
  console.log(descriptors1.property1.writable);  
  console.log(descriptors1.property1.value

    const object1 = {};  
 a = Symbol('a');  
 b = Symbol.for('b');  
const objectSymbols = Object.getOwnPropertySymbols(object1);  
console.log(objectSymbols.length);  

let raay = {  
    drive() {  
      return 'Add raay';  
    }  
  }  
  let naty  = {  
    net() {  
      return 'use net';  
    }  
  }  
    
  Object.setPrototypeOf(naty, raay);  
    
  console.dir(naty);   
  console.log(naty.net()); 
  console.log(naty.drive()); 
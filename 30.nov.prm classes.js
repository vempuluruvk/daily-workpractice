function mydata() { 

    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const data = { name: "Rohit", age: 23 }; 
            resolve(data); 
        }, 2000); 
    }); 
} 

mydata() 
    .then((data) => { 
        console.log("Data:", data); 
    }) 
    .catch((error) => { 
        console.error("Error:", error); 
    }); 


    async function example() {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 2000)
        });
      
        let result = await promise; 
      
            alert(result); 
    }
      
      example();


      function focusevent()  
      {  
          document.getElementById("input1").style.background=" aqua";  
      }  
  
  
      function keydownevent()  
      {  
          document.getElementById("input1");  
          alert("Pressed a key");  }


          function toGreet() { 
            console.log("Hello There!"); 
        } 
        
        let myObj = { 
        
            
            greet: toGreet, 
        
            
            byWhom: function() { 
                console.log(" - GeeksforGeeks.org"); 
            } 
        } 
        
        myObj.greet(); 
        myObj.byWhom();

        function constructor 
function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 

Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 


let Person1= new Person('Jenni', 'clerk', 1986); 
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 

Person1.calculateAge(); 
Person2.calculateAge(); 
const o = new Object(); 
o.foo = 42; 

console.log(o); 

// JavaScript code demonstrating a simple object 
let school = { 
	name: 'Vivekananda School', 
	location : 'Delhi', 
	established : '1971', 
	displayInfo : function(){ 
		console.log(`${school.name} was established 
			in ${school.established} at ${school.location}`); 
	} 
} 
school.displayInfo(); 

// Bracket notation 
let school = { 
	name: 'Vivekananda School', 
	displayInfo : function(){ 
		console.log(`${school.name.split(' ')[0]}`); 
	} 
} 
school.displayInfo(); // Vivekananda 

// hasOwnProperty code in js 
const object1 = new Object(); 
object1.property1 = 42; 

console.log(object1.hasOwnProperty('property1')); // true 


let person = { 
	gender : "male"
} 

let person1 = Object.create(person); 
person1.name = "Adam"; 
person1.age = 45; 
person1.nationality = "Australian"; 

for (let key in person1) { 
// Output : name, age, nationality 
// and gender 
	console.log(key); 
}		 

let obj1 = { 
	propfirst : "Name"
} 


console.log(obj1.propfirst); 
delete obj1.propfirst 
console.log(obj1.propfirst);			 

let obj1 = { 
	propfirst : "Name"
} 
 console.log(obj1.propfirst) 


let obj2 = Object.create(obj1); 

 console.log(obj2.propfirst); 
	console.log(delete obj2.propfirst); 

		 
	console.log(obj2.propfirst); 

    var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary); 

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"Vimal Jaiswal",30000);  
      
    document.write(e.id+" "+e.name+" "+e.salary);  

    function emp(id,name,salary){  
        this.id=id;  
        this.name=name;  
        this.salary=salary;  
          
        this.changeSalary=changeSalary;  
        function changeSalary(otherSalary){  
        this.salary=otherSalary;  
        }  
        }  
        e=new emp(103,"Sonoo Jaiswal",30000);  
        document.write(e.id+" "+e.name+" "+e.salary);  
        e.changeSalary(45000);  
        document.write("<br>"+e.id+" "+e.name+" "+e.salary);  



const student = {
    firstName: 'krishna',
    
    
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); 

student.changeName = 'vamsi';

console.log(student.firstName);



const student = {

    
    firstName: 'Monica',
    
    
    get getName() {
        return this.firstName;
    }
};

console.log(student.firstName); 


console.log(student.getName); 

console.log(student.getName()); 




const student = {
    firstName: 'Monica'
}


Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); 

student.changeName = 'Sarah';

console.log(student.firstName); 


Math.max(4, 13, 27, 0, -5);

let numbers = [4, 13, 27, 0, -5];

Math.max(...numbers);


Math.min(7, 2, 9, -6);

Math.pow(5, 2); 
Math.pow(7, 4); 
Math.pow(9, 0.5); 
Math.pow(-8, 2); 
Math.pow(-4, 3); 

ath.sqrt(25); 
Math.sqrt(169); 
Math.sqrt(3); 
Math.sqrt(1); 
Math.sqrt(-5); 

Math.trunc(0.1)  
Math.trunc(1.3)   
Math.trunc(-0.9)

Math.floor(0.9)


//Declaring class  
class Employee  
  {  
  constructor(id,name) //Initializing an object 
    {  
      this.id=id;  
      this.name=name;  
    }  

    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }    
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); 
e2.detail();  



var emp=class   
  {  
  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }        
detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
   
var e1=new emp(101,"vamsi");  
var e2=new emp(102,"kmcmkm");  
e1.detail();  
e2.detail();  
  
 
var emp=class   
  {  
 
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
   
var e1=new emp(103,"James Bella");  
var e2=new emp(104,"Nick Johnson");  
e1.detail();  
e2.detail();  

const user = {
  name: 'Nehal Mahida',
  userName: 'nehal_mahida',
  password: 'password:)',
  login: function(userName, password) {
    if (userName === this.userName && password === this.password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  },
};


user.login('nehal', 'nehal');
user.login('nehal_mahida', 'password:)');





class User {
  #password;
  constructor(name, userName, password) {
    this.name = name;
    this.userName = userName;
    this.#password = password;
  }

  login(userName, password) {
    if (userName === this.userName && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }
};

const nehal = new User('Nehal Mahida', 'nehal_mahida', 'password:)');
const js = new User('JavaScript', 'js', 'python:)');


nehal.login('nehal_mahida', 'password:)'); 
js.login('js', 'python:)');
console.log(nehal.name); 
console.log(nehal.password);
console.log(nehal.#password); r

nehal.setPassword('new_password:)');
nehal.login('nehal_mahida', 'password:)'); 
nehal.login('nehal_mahida', 'new_password:)'); 
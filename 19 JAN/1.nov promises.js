function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  async function myFunction() {return "Hello";}
  
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);})

    
    
    function myFunction(callback) { 
        setTimeout(() => { 
            const data = { name: "Aman", age: 21 }; 
            callback(data); 
        }, 3000); 
    } 
    
    myFunction((data) => { 
        console.log("Data:", data); 
    });

    
    
    
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
    
    
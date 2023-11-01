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


    function resolveAfter2Seconds() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }
      
      async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);

        const p = new Promise((res, rej) => {
            res(1);
          });
          
          async function asyncReturn() {
            return p;
          }
          
          function basicReturn() {
            return Promise.resolve(p);
          }
          
          console.log(p === basicReturn());
          console.log(p === asyncReturn());

          async function foo() {
            const result1 = await new Promise((resolve) =>
              setTimeout(() => resolve("1")),
            );
            const result2 = await new Promise((resolve) =>
              setTimeout(() => resolve("2")),
            );
          }
          foo();

          function resolveAfter2Seconds() {
            console.log("starting slow promise");
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("slow");
                console.log("slow promise is done");
              }, 2000);
            });
          }
          
          function resolveAfter1Second() {
            console.log("starting fast promise");
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("fast");
                console.log("fast promise is done");
              }, 1000);
            });
          }
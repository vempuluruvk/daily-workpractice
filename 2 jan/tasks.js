// let value = [4, 10, 5, 7, 6, 18];


// let value2 = value.fill(50);
// console.log(value);
// console.log(value2);


// let value = [4, 10, 5, 7, 6, 18];
// value.fill(15, 3); 
// console.log(value);

let value = [5, 3, 9, 10, 50, 100];
let i;

for (i = 0; i < value.length; i++) {
	value[i] = 2;
}
console.log(value);

let values = [];

// An empty array is taken
let i, length = 5;
for (i = 0; i < length; i++) {
	value.push(10);
}
console.log(value);

let arr = [1, 3, 5, 8, 9, 10];
let arr2 = [...arr].map((value) => value = 100);
console.log(arr2);




	var myInt = 235345; 
	
	// Getting the string as a parameter 
	// and typecasting it into an integer 
	let myFunc = num => Number(num); 
	
	var intArr = Array.from(String(myInt), myFunc); 
	
	// Print the result array 
	console.log(intArr); 


    
	var myArr = String(num).split("").map((num)=>{ 
	return Number(num) 
	}) 
	
	console.log(myArr) 

    
	var myInt = 235345; 
	
	// number to string conversion 
	var temp = ''+myInt 
	// forming array with numbers as element 
	var intArr = [...temp].reduce((acc, n)=> acc.concat(+n), [] ); 
	
	// Print the result array 
	console.log(intArr); 


   
	
		// Function to check prime number
		function p() {
			
			var n, i, flag = true;
			
			// Getting the value form text
			// field using DOM
			n = document.myform.n.value;
			n = parseInt(n)
			for(i = 2; i <= n - 1; i++)
				if (n % i == 0) {
					flag = false;
					break;
				}
				
				// Check and display alert message
			if (flag == true)
				alert(n + " is prime");
			else
				alert(n + " is not prime");
		}

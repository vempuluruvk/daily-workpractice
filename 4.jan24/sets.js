let set1 = new Set(); 

set1.add(10); 
set1.add(20); 

set1.add(30).add(40).add(50); 
console.log(set1);

let set1 = new Set("foooodiiiieee"); 
console.log(set1.delete('e')); 

console.log(set1); 
console.log(set1.delete('g'));

let set2 = new Set([10, 20, 30, 40, 50]); 

console.log(set2); 

set2.clear() 

console.log(set2);


let set1 = new Set(); 

set1.add(50); 
set1.add(30); 
set1.add(40); 
set1.add(20); 
set1.add(10); 

// using entries to get iterator 
let getEntriesArry = set1.entries(); 

// each iterator is array of [value, value] 
console.log(getEntriesArry.next().value); 

console.log(getEntriesArry.next().value); 

console.log(getEntriesArry.next().value);


let set1 = new Set(); 

// adding element to the set 
set1.add(50); 
set1.add(30); 
set1.add(40); 
set1.add("Geeks"); 
set1.add("GFG"); 

// getting all the values 
let getValues = set1.values(); 

console.log(getValues); 

let getKeys = set1.keys(); 

console.log(getKeys);


let set1 = new Set(["sumit","sumit","amit","anish"]); 

let getit = set1[Symbol.iterator](); 

console.log(getit.next()); 

console.log(getit.next()); 

console.log(getit.next()); 

console.log(getit.next());



Set.prototype.subSet = function(otherSet) 
{ 
	 
	if(this.size > otherSet.size) 
		return false; 
	else
	{ 
		for(let elem of this) 
		{ 
			 
			if(!otherSet.has(elem)) 
				return false; 
		} 
		return true; 
	} 
} 
let setA = new Set([10, 20, 30]); 
let setB = new Set([50, 60, 10, 20, 30, 40]); 
let setC = new Set([10, 30, 40, 50]); 


console.log(setA.subSet(setB)); 

console.log(setA.subSet(setC));  
console.log(setC.subSet(setB));



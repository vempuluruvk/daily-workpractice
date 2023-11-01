const map1 = new Map(); // an empty map
console.log(map1); 

// create a set
let map1 = new Map();

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); 
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info'));

const set1 = new Set([1, 2, 3]);

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map1.has('info'));

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map1.delete('address');
console.log(map1);  

map1.delete('info');
console.log(map1); 

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removinlet map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing all element
map1.clear();
console.log(map1); 
map1.clear();
console.log(map1);

let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);

    let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  
}


console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

"foo" + "bar"; // "foobar"

// Number + String -> concatenation
5 + "foo"; // "5foo"

// String + Boolean -> concatenation
"foo" + false; // "foofalse"

// String + Number -> concatenation
"2" + 2; // "22"

let a = 2;
let b = 'hello';

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += ' world')); // Concatenation

const a = 5; 
const b = 3; 
console.log(a & b);

const a = 5; 
const b = -3;
console.log(~a); 
console.log(~b);


let a = 5; 
a |= 3;
console.log(a);

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));

 
 
  const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
  console.log(greeting({ name: "Alice" })); 
  console.log(greeting(null)); 



console.log('hello' == 'hello');
console.log(5 >= 3);

console.log('hello' != 'hello');

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);

let a = 2;
console.log((a *= 3));
console.log((a *= 'hello'));
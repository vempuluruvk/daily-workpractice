let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);



// for in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// forof

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

onst iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

// switch
onst expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}

// while
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
// Example of strict mode
"use strict";

catchThemAll();
function catchThemAll() {
  x = 3.14; // Error will be thrown
  return x * x;
}


// Example of comparators
0 == false; // true
0 === false; // false

2 == '2'; // true
2 === '2'; // false
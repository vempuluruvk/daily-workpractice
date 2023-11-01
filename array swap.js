// Swapping array using temporary variable
let array = [10, 2, 5, 12, 7];
temp = array[1];
array[1] = array[0];
array[0] = temp;

console.log("Array after swapping : " + array);

// Swapping first two elements of the array
let array = [10, 2, 5, 12, 7];
[array[0], array[1]] = [array[1], array[0]];
console.log("Array after swapping : " + array);

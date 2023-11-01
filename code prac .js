const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log('Original Numbers:', numbers);
console.log('Even Numbers:', evenNumbers);

function countVowelsAndConsonants(inputString) {
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of inputString.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (char >= 'a' && char <= 'z') {
        consonantCount++;
      }
    }
  
    return { vowels: vowelCount, consonants: consonantCount };
  }
  
  const text = "Hello, how are you?";
  const counts = countVowelsAndConsonants(text);
  
  console.log('Text:', text);
  console.log('Vowel Count:', counts.vowels);
  console.log('Consonant Count:', counts.consonants);

  const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 10 },
    { name: 'Jeans', price: 40 }
  ];
  
  const totalCost = products
    .map(product => product.price)
    .reduce((acc, price) => acc + price, 0);
  
  console.log('Products:', products);
  console.log('Total cost of all products:', totalCost);

  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        console.log(`Even number at position [${i}][${j}]: ${matrix[i][j]}`);
      }
    }
  }
  
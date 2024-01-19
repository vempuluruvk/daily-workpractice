const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]


function Person() {
.
    const self = this;
    self.age = 0;
  
    setInterval(function growUp() {
      self.age++;
    }, 1000);
  }
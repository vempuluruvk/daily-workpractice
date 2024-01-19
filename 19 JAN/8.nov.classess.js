class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}
const emp1 = new emp("Geek1", "25 years");
console.log(emp1.name);
console.log(emp1.age);



function Hero(name, level) {
	this.name = name;
	this.level = level;
}
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
// Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}

function Hero(name, level) {
	this.name = name;
	this.level = level;
}


Hero.prototype.greet = function() {    // Adding a method to the constructor
	return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}




class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	
	greet() {
		return `${this.name} says hello.`;
    }
}


class Mage extends Hero {
	constructor(name, level, spell) {
		
		super(name, level);
      this.spell = spell;
	}
}

class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  console.log(new Polygon(4, 3).area);

  async function* asyncGenerator() {
    let i = 0;
    while (i < 3) {
      yield i++;
    }
  }
  
  (async () => {
    for await (const num of asyncGenerator()) {
      console.log(num);
    }
  })();
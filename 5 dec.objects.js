function arr2obj(arr) {

	let obj = {};

	arr.forEach((v) => {
		let key = v[0];
		let value = v[1];

		obj[key] = value;
	});
	return obj;
}

console.log(
	arr2obj([
		["John", 12],
		["Jack", 13],
		["Matt", 14],
		["Maxx", 15],
	])
);

function arr2obj(arr) {
	return arr.reduce(
		(acc, curr) => {

			let key = curr[0];
			let value = curr[1];

			acc[key] = value;

			return acc;
		},
		{}
	);
}

console.log(
	arr2obj([
		["Eren", "Yeager"],
		["Mikasa", "Ackermann"],
		["Armin", "Arlelt"],
		["Levi", "Ackermann"],
	])
);

function arr2obj(arr) {


	arr = arr.flat();
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {

			let key = arr[i];
			let value = arr[i + 1];

			
			obj[key] = value;
		}
	}

	return obj;
}

console.log(
	arr2obj([
		["Max", 19],
		["Chloe", 20],
		["Nathan", 22],
		["Mark", 31],
	])
);

var myObj = {
	Name: "Raghav",
	Age: 30,
	Sex: "Male",
	Work: "Web Developer",
	YearsOfExperience: 6,
	Organisation: "GeeksforGeeks",
	Address: "address--address some value"
};

console.log("After removal: ");
delete (myObj.Address);
console.log(myObj);



let employees_data = [
	{
		employee_id: 1,
		employee_name: "Aman",
	},
	{
		employee_id: 2,
		employee_name: "Bhargava",
	},
	{
		employee_id: 3,
		employee_name: "Chaitanya",
	},
];
for (let object of employees_data) {
	if (object.employee_id === 2) {
		object.employee_name = "Anthony";
	}
}
console.log("Updated Data: ");
console.log(employees_data);




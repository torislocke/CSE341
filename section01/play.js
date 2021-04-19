var youName = 'Max'; //string variable
var age = 29; // number variable
var hasHobbies = true; // boolean variable

// function with arguments that are local variables only available in function
function summarizUser(userName, userAge, userHasHobby) {
	return 'Name is ' + userName + ' User Age ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}
// call the function and display in console
console.log(summarizUser(youName, age, hasHobbies));

// if the variable will never change use const vs. var or let

// ************************** newer method //
const newSummary = (userName, userAge, userHasHobby) => {
	return 'Name is ' + userName + ' User Age ' + userAge + ' and the user has hobbies: ' + userHasHobby;
};

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = (a) => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());

const person = {
	userName: 'Frank',
	userAge: 29,
	greet() {
		console.log('Hi, I am ' + this.name);
	},
};
person.greet();

console.log(person);

// javascript array can be string, boolean, numbers, objects, etc.

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
	console.log(hobby);
}
// map returns a new array
console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
console.log('New array created with .map ' + hobbies);
console.log(`Template literal method vs concat ${hobbies}`);

const copiedArray = hobbies.slice();
console.log('Copied Array ' + copiedArray);

// nested array wil show square brackets within brackets
const nestedArray = [hobbies];
console.log('This is a nested array ' + nestedArray);

// -------------- Spread and Rest -------------------- //
// spread operator ... pulls all elements of existing array
// and adds to new array copies arrays and objects
const innerArray = [...hobbies];
console.log('Copies an array in new ' + innerArray);

// rest operator
const toArray = (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

const toRestArray = (...args) => {
	return args;
};
console.log(toRestArray(1, 2, 3, 4));

//  --------------- Destructuring ------------- //

const printName = (personData) => {
	console.log(personData.userName);
};
printName(person);

const destructName = ({ userName }) => {
	console.log('this is destructed ' + userName);
};
destructName(person);
// below values are from object destructuring
// objects need to be pulled by property name
const { userName, userAge } = person;
console.log(userName, userAge);

// below values are from array destructuring
// arrays are pulled by position not name

const newHobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// ----- Async Code and Promises ----- //

const fetchData = (callback) => {
	setTimeout(() => {
		callback('Done!');
	}, 1500);
};

// async code - nested async code

setTimeout(() => {
	console.log('Timer is done!');
	fetchData((text) => {
		console.log(text);
	});
}, 2000);

// sync code is immediate
console.log('Hello!');
console.log('Hi');

// with promise constructor function
const fetchPromiseData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
	return promise;
};
// if multiple promises
setTimeout(() => {
	console.log('Promise Timer is done!');
	fetchPromiseData()
		.then((text) => {
			console.log(text);
			return fetchPromiseData();
		})
		.then((text2) => {
			console.log(text2);
		});
}, 2000);

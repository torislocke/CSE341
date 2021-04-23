const fs = require('fs');
const path = require('path');

// global helper constant
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'users.json');

// helper function with call back (cb) to read the user json file
const getUsersFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		console.log(fileContent)
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class User {
	constructor(u) {
		this.userName = u;
	}

	save() {
		getUsersFromFile(users => {
			users.push(this);
			fs.writeFile(p, JSON.stringify(users), (err) => {
				console.log(err);
			});
		});
	}
//cb is call back
	static fetchAll(cb) {
		getUsersFromFile(cb);
	}
};

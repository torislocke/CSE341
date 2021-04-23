const User = require('../models/user');
// logic for admin.js file
exports.getAddUser = (req, res, next) => {
	res.render('add-user', {
		pageTitle: 'Prove Assignment',
		path: '/prove/add-user',
		formsCSS: true,
		productCSS: true,
		activeAddUser: true,
	});
};
exports.postAddUser = (req, res, next) => {
	const user = new User(req.body.userName);
	user.save();
	res.redirect('user');
	console.log('user');
};

exports.getUsers = (req, res, next) => {
	User.fetchAll((users) => {
		res.render('user', {
			user: users,
			pageTitle: 'User List',
			path: '/prove/user',
			hasUsers: users.length > 0,
			activeUser: true,
			userCSS: true,
		});
	});
};

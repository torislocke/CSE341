const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === '/') {
		res.setHeader('Content-type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Assigment One</title></head>');

		res.write('<body>');
		res.write('<h1>This is my first assignment.</h1>');
		res.write(
			'<form action="action"/createUser" method="POST"><input type="text" name="userName"><button type="submit">Send</button></form>'
		);
		res.write('</body>');
		res.write('<html>');
		return res.end();
	}
	if (url === '/users') {
		res.setHeader('Content-type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Assigment One - User</title></head>');

		res.write('<body>');
		res.write('<h1>First Assignment - User View.</h1>');
		res.write('<p>Here is another option</p>');
		res.write('<ul><li>User One</li></ul>');
		res.write('</body>');
		res.write('<html>');
		return res.end();
	}
	if (url === '/creatUser') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		// all data has been read and added to body array
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parseBody.split('=')[1]); // userName
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
	}
});

server.listen(3000);

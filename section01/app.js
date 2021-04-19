// most functions are not available by default
// node.js core modules
// http to launch a server
// https to launch a secure server and
// fs path os

const http = require('http');
const fs = require('fs'); // work with file system

// function rqListener(infoRequest, infoResponse) {
// }
// http.createServer(rqListener);

// another way

// http.createServer(function (req, res) {

// });

// next generation method - the path forward this returns a server
const server = http.createServer((req, res) => {
	// console.log(req.url, req.method, req.headers);
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
		);
		res.write('</html>');
		return res.end(); // end the response to send back to client
	}
	if (url === '/' && method === 'POST') {
		fs.writeFileSync('message.txt', 'DUMMY');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from my Node.js Page</h1></body>');
	res.write('</html>');
	res.end(); // end the response to send back to client
});
// the server will listen for incoming requests default is port 80
// entering 3000 for localhost
server.listen(3000);

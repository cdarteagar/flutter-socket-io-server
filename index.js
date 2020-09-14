const express = require('express');
const path = require('path');
require('dotenv').config();

//app de express

const app = express();


//SERVER

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//Path Publico
const publicPath = path.resolve(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
	if (err) throw new Error(err);
	console.log('Server corriendo puerto 3000!!!');
	}
);

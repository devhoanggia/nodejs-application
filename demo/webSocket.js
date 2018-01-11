/**
 * Created by lap00344 on 1/23/17.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('a new user is connected');

    //listen from client
    socket.on('hello-message', data => console.log(data));
    //send data to client
    socket.emit('hello-server', { myData: 'hello from server' });
});

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
var express = require('express')

var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(4000,function(){
    console.log("listening to reuests on prt 4000");
});
app.use(express.static('public'))
// app.use(express.static('public'))

//Socket Setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('made socket Connection ',socket.id)

    socket.on('chat',function(data) {
       io.sockets.emit('chat',data); 
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

}); 
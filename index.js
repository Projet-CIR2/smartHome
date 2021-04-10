const port = 4550;

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

var PF = require('pathfinding');

var tab = [
    [0,1,0],
    [0,0,0],
]

var grid = new PF.Grid(2, 3); 

var finder = new PF.AStarFinder();


for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        //console.log(tab[i][j]);
        if(tab[i][j] == 1) {
            grid.setWalkableAt(i, j, false);
        }
    }
}

var path = finder.findPath(0,0,0,2, grid);

console.log(path);

var gridBackup = grid.clone();

app.use(express.static(__dirname + "/"));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/menu.html');
});

app.get('/jouer', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/comment-jouer', (req, res, next) => {
    res.sendFile(__dirname + '/views/comment-jouer.html');
});

io.sockets.on('connection', function (socket) {
    io.emit('Hello', 'A new connection on our website !'); // permet d'envoyer le message à toutes les connections
});

server.listen(port);

console.log("let's go http://localhost:4550");
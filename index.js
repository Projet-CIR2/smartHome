const port = 4555;

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

var PF = require('pathfinding');

/*
var tab = [
    [0,1,0],
    [0,0,0],
]
*/

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

io.on('connection', function (socket) {
    io.emit('Hello', 'A new connection on our website !'); // permet d'envoyer le message à toutes les connections
    socket.on('matrix', data => {
        //console.table(data);

        var grid = new PF.Grid(9, 9);

        var finder = new PF.AStarFinder({
            allowDiagonal : true,
        });


        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if(data[i][j] == 1) {
                    //console.log(i,j," ");
                    grid.setWalkableAt(i, j, false);
                }
            }
        }

        var path = finder.findPath(8, 4, 0, 4, grid);

        console.log(path);
        socket.emit('path', path);
        var gridBackup = grid.clone();

    });
});

server.listen(port);

console.log("let's go http://localhost:4555");
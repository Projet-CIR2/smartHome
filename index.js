const port = 4555;

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const http = require('http').Server(app);
const io = require('socket.io')(server);

var PF = require('pathfinding');


const sharedsession = require("express-socket.io-session");

const bodyParser = require('body-parser');
const session = require('express-session')({
    secret: "30cm",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 56060*1000,
        secure: false,
    }

});

/*
var tab = [
    [0,1,0],
    [0,0,0],
]
*/

let scenario;
const urlencodedParser = bodyParser.urlencoded({ extended: false});

/* init express */
app.use(urlencodedParser);
app.use(session);
app.use(express.static(__dirname + "/"));


io.use(sharedsession(session, {
    autoSave: true
}));



app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/menu.html');
});

app.get('/jouer', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/scenario', (req, res, next) => {
    res.sendFile(__dirname + '/views/scena.html');
});
app.get('/comment-jouer', (req, res, next) => {
    res.sendFile(__dirname + '/views/comment-jouer.html');
});

app.post('/scenario', (req, res) => {
    const scena = {
        titre: req.body.elmtTitre,
            description_debut: req.body.elmtdescription_debut,
            description_milieu: req.body.elmtdescription_milieu,
            description_fin: req.body.elmtdescription_fin,
            difficulte: req.body.elmtdifficulte,
            argent: req.body.elmtargent,
            debit: req.body.elmtdebit,
            humeur: req.body.elmthumeur,
            
            obj1 : req.body.elmtObj1,
            obj2 : req.body.elmtObj2,
            obj3 : req.body.elmtObj3,
            
    }
    scenario = scena;
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req, res) => {
    const scena = {
        titre: req.body.elmtTitre,
            description_debut: req.body.elmtdescription_debut,
            description_milieu: req.body.elmtdescription_milieu,
            description_fin: req.body.elmtdescription_fin,
            difficulte: req.body.elmtdifficulte,
            argent: req.body.elmtargent,
            debit: req.body.elmtdebit,
            humeur: req.body.elmthumeur,
            
            obj1 : req.body.elmtObj1,
            obj2 : req.body.elmtObj2,
            obj3 : req.body.elmtObj3,
            
    }
    scenario = scena;
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
    io.emit('Hello', 'A new connection on our website !'); // permet d'envoyer le message à toutes les connections
    socket.on('matrix', (data, width, heigth, tab, id) => {

        var grid = new PF.Grid(heigth, width);
        

        var finder = new PF.AStarFinder({
            allowDiagonal : false,
        });

        
        for (var i = 0; i < heigth; i++) {
            for (var j = 0; j < width; j++) {
                if(data[i][j] == 1) {
                    grid.setWalkableAt(i, j, false);
                }
            }
        }
        
        var path = finder.findPath(tab[0], tab[1], tab[2],tab[3], grid);
        socket.emit('path', path, id);
        var gridBackup = grid.clone();

    });
    socket.emit('scena', scenario);
});



server.listen(port);

console.log("let's go http://localhost:4555");
// port utilisé par le site
const port = 4550;

// instanciation du serveur
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname));

// redirige l'utilisateur vers la page principale
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(port);

console.log("let's go http://localhost:4550");
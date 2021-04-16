//Init Jeu
var game = new Phaser.Game(window.innerWidth * 8 / 12 - 30, window.innerHeight - 56, Phaser.AUTO, 'game_page', {
    preload: preload,
    create: create,
    update: update
});

let cursors, cursors2;
let player;
let val = 0
let randomValue;

var text;
var button;
let mapPilou;
var layer;
var layer2;

let newCoordX;
let newCoordY;
let testt;
let destination = -1;
let destinationInter = -1;


let matrixMap = new Array(9);
for (var i = 0; i < 9; i++) {
    matrixMap[i] = new Array(9);
}

function preload() {
    game.load.spritesheet('button', '/img/button.png', 960, 480);
    game.load.image('tempHouse', '../img/tempHouse.png');
    game.load.spritesheet('perso1', '../img/perso1_45x60.png', 45, 60);

    game.load.tilemap('map', '../testPathfinding/newmaptest.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', '../testPathfinding/map.png');
}

function create() {
    //	Just to kick things off
    button = game.add.button(game.world.centerX - 120, game.world.centerY - 120, 'button', start, this, 2, 1, 0);
    button.width = 240;
    button.height = 120;

    //	Progress report
    text = game.add.text(game.world.centerX - 70, game.world.centerY - 75, 'Start Game', { fill: '#ffffff' });

    game.stage.backgroundColor = '#182d3b'

    cursors = this.input.keyboard.createCursorKeys();
    cursors2 = this.input.keyboard.addKeys({
        'P': Phaser.KeyCode.P
    });

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    cursors2.P.onDown.add(goFull, this);
}
function update() {

    if (!button.visible) {
        game.physics.arcade.collide(player, layer2);
        //movePlayer(player);
        // if(val2 == 0) {
        //     chemin();
        //     val2 =1;
        // }
        //movePlayer2(player, 300, 300);
        chemin();
    }
}

//Lance le plein ecran
function goFull() {
    if (this.scale.isFullScreen) this.scale.stopFullScreen();
    else this.scale.startFullScreen(false);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function start() {
    mapPilou = game.add.tilemap('map');
    mapPilou.addTilesetImage('map', 'tiles');

    layer1 = mapPilou.createLayer('Calque de Tuiles 1');
    layer2 = mapPilou.createLayer('collider');
    layer1.resizeWorld();
    layer2.resizeWorld();

    text.visible = false;
    button.visible = false;

    player = game.add.sprite(260, 600, 'perso1');
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.1;
    player.body.collideWorldBounds = true;
    player.body.setSize(43, 24, 2, 40);

    player.animations.add('left', [3, 4, 5], 10, true);
    player.animations.add('face', [1], 1, true);
    player.animations.add('back', [10], 1, true);
    player.animations.add('right', [6, 7, 8], 10, true);
    player.animations.add('down', [0, 1, 2], 10, true);
    player.animations.add('up', [9, 10, 11], 10, true);

    mapPilou.setCollisionBetween(0, 3, true, 'collider');

    let coucou = mapPilou.layers[1].data;

    for (let u = 0; u < 9; u++) {
        for (let v = 0; v < 9; v++) {
            if (coucou[u][v].index == -1) matrixMap[u][v] = 0;
            else matrixMap[u][v] = 1;
        }
    }
    socket.emit('matrix', matrixMap);

    socket.on('path', path => {
        testt = path;
    });
}

function movePlayer(player) {
    // if (val % 50 == 0) {
    //     randomValue = getRandomInt(5);
    // }
    // val++;

    //console.log('x:', player.x, 'y:', player.y);
    //console.log(game.height, game.width);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.up.isDown || randomValue == 1) {
        player.body.velocity.y -= 150;
        player.animations.play('up');
    }
    else if (cursors.down.isDown || randomValue == 2) {
        player.body.velocity.y += 150;
        player.animations.play('down');
    }
    else if (cursors.right.isDown || randomValue == 3) {
        player.body.velocity.x += 150;
        player.animations.play('right');
    }
    else if (cursors.left.isDown || randomValue == 4) {
        player.body.velocity.x -= 150;
        player.animations.play('left');
    }
    else {
        player.animations.stop();
        player.animations.play('face');
    }
}

function calculPixelX(x) {
    //console.log(game.height, result, newCoordX);
    //console.log(game.width, result2, newCoordY);
    
    let test2 = x * 64 ;
    //console.log(mapPilou.width, mapPilou.height);
    return test2;
}

function calculPixelY(y) {
    
    let test2 = y * 64;
    return test2;
    
}

function movePlayer2(player, x, y) {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    var playerXRound = Math.round(player.x);
    var playerYRound = Math.round(player.y);

    if (playerXRound != x || playerYRound != y) {
        if (playerXRound > x) {
            player.body.velocity.x -= 30;
            player.animations.play('left');

        }
        if (playerXRound < x) {
            player.body.velocity.x += 30;
            player.animations.play('right');

        }
        if (playerYRound > y) {
            player.body.velocity.y -= 30;
            player.animations.play('up');
        }
        if (playerYRound < y) {
            player.body.velocity.y += 30;
            player.animations.play('down');
        }
    } else {
        console.log("trouvé x");
        player.animations.stop();
        player.animations.play('face');
        return 1;
    }
}

function chemin() {
    let x, y;

    if(destination == -1 && 9 >= 1){

        destination = 8;
        destinationInter = 0;

    }
    let coords = testt[destinationInter];
    x = coords[1];
    y = coords[0];

    newCoordX = calculPixelX(x);
    newCoordY = calculPixelY(y);
    newCoordX = Math.round(newCoordX);
    newCoordY = Math.round(newCoordY);
    console.log(newCoordX , newCoordY);
    if(movePlayer2(player, newCoordX, newCoordY)){
        if (destinationInter +1 < 9) destinationInter ++; 
    }
}
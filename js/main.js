var config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 8 / 12,
    height: window.innerHeight - 56,
    backgroundColor: '#2d2d2d',
    parent: 'game_page',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

var controls;

var game = new Phaser.Game(config);

var player;
var J2Haut;
var J2Bas;
var J2Gauche;
var J2Droite;
var layer1;
var layer2, layer3;
var collisions;
var map;
var sprite, clickImg;
let housebarre;


var chronoTexte;
var monTimer;
var chrono = 100;

let matrixMap;
let chemin;
let cheminSize;


let newCoordX;
let newCoordY;
let testt;
let destination = -1;
let destinationInter = -1;

let isoX, isoY;
let text;


let mapWidth;
let mapHeight;

function preload() {

    this.load.image('tempHouse', '../img/tempHouse.png');

    this.load.tilemapTiledJSON('map', '../testPathfinding/map.json');
    //this.load.tilemapTiledJSON('map', '../testPathfinding/newmaptest.json');
    this.load.image('tiles', '../testPathfinding/tiles.png');

    //this.load.spritesheet('perso1', '../img/perso1_45x60.png', { frameWidth: 45, frameHeight: 60 });
    this.load.spritesheet('perso1', '../img/player.png', { frameWidth: 256, frameHeight: 512 });
    this.load.image('button', '../img/button.png');

    this.load.image('back', '../img/back.png');
}

function create() {
    console.log('hola');
    //matrixMap.forEach(element => element.forEach(elem => elem = 0));
    //console.log(matrixMap);
    /*button = game.add.button(game.world.centerX - 120, game.world.centerY - 120, 'button', start, this, 2, 1, 0);
    button.width = 240;
    button.height = 120;

    //	Progress report
    text = game.add.text(game.world.centerX - 70, game.world.centerY - 75, 'Start Game', { fill: '#ffffff' });

    game.stage.backgroundColor = '#182d3b'


    cursors2 = this.input.keyboard.addKeys({
        'P': Phaser.KeyCode.P
    });

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    cursors2.P.onDown.add(goFull, this);*/


    J2Haut = this.input.keyboard.addKey('Z');
    J2Bas = this.input.keyboard.addKey('S');
    J2Gauche = this.input.keyboard.addKey('Q');
    J2Droite = this.input.keyboard.addKey('D');

    map = this.add.tilemap('map');

    mapWidth = map.width;
    mapHeight = map.height;

    let matrixMap = new Array(mapWidth);
    for (var i = 0; i < mapWidth; i++) {
        matrixMap[i] = new Array(mapHeight);
    }

    let coucou = map.layers[1].data;

    for (let u = 0; u < map.width; u++) {
        for (let v = 0; v < map.height; v++) {
            if (coucou[u][v].index == -1) {
                matrixMap[u][v] = 0;
            }
            else {
                matrixMap[u][v] = 1;
            }
        }
    }

    socket.emit('matrix', matrixMap);
    
    socket.on('path', path => {
        chemin = path;
        cheminSize = path.length;

    });
    

    collisions = this.physics.add.staticGroup();

    clickImg = this.add.sprite(5, 5, 'tempHouse');
    clickImg.setInteractive();

    let button = this.add.sprite(500, 500, 'button');
    button.setInteractive();

    click(clickImg);
    click(button);

    let tilesets = map.addTilesetImage('tiles', 'tiles');
    //console.log(map);

    layer1 = map.createLayer('sol', tilesets);
    layer2 = map.createLayer('walls_doors', tilesets);
    layer3 = map.createLayer('meubles', tilesets);

    var cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setZoom(0.3);

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.8,
        drag: 0.005,
        maxSpeed: 3
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);


    let pos = convert([0,0]);
    player = this.physics.add.sprite(pos[0],pos[1], 'perso1');

    player.body.bounce.y = 0.1;
    //player.setCollideWorldBounds(true);
    //player.body.setSize(43, 24, 2, 40);

    this.anims.create({
        key: 'left',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 3, end: 5 }),
        frames: this.anims.generateFrameNumbers('perso1', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1

    })
    this.anims.create({
        key: 'right',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 6, end: 8 }),
        frames: this.anims.generateFrameNumbers('perso1', { start: 1, end: 1 }),
        frameRate: 10,
        repeat: -1
    })
    this.anims.create({
        key: 'up',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 9, end: 11 }),
        frames: this.anims.generateFrameNumbers('perso1', { start: 2, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 0, end: 2 }),
        frames: this.anims.generateFrameNumbers('perso1', { start: 3, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'face',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 1, end: 1 }),
        frames: this.anims.generateFrameNumbers('perso1', { start: 3, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'back',
        //frames: this.anims.generateFrameNumbers('perso1', { start: 10, end: 10 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, collisions);

    let graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0x008800 } });

    housebarre = new Barre(graphics, clickImg, clickImg.width);

    monTimer = this.time.addEvent({
        delay: 1000,
        callback: compteUneSeconde,
        callbackScope: this,
        loop: true
    });
    //convertTileCoordInScreenCoord(5,5);

    text = this.add.text(0, 0, 'Move the mouse', { font: '10px Courier', fill: '#00ff00' });
}   

function compteUneSeconde () {
    chrono= chrono-1; // on incremente le chronometre d'une unite
}

function update(time, delta) {
    housebarre.modifBarre(chrono);
    //movePlayer(player);
    controls.update(delta);
    //movePlayer2(player, 401, 420);
    //console.log(player.x, player.y);


    cheminPath();


    let pointer = this.input.activePointer;

    text.setText([
        'x: ' + pointer.x,
        'y: ' + pointer.y,
        'mid x: ' + pointer.midPoint.x,
        'mid y: ' + pointer.midPoint.y,
        'velocity x: ' + pointer.velocity.x,
        'velocity y: ' + pointer.velocity.y,
        'movementX: ' + pointer.movementX,
        'movementY: ' + pointer.movementY
    ]);
}

function render() {
    game.debug.inputInfo(32, 32);
    game.debug.pointer(game.input.activePointer);
}

function movePlayer(player) {
    //console.log('x:', player.x, 'y:', player.y);
    //console.log(game.height, game.width);

    if (J2Haut.isDown) {
        //console.log("haut");
        player.y -= 20;
        player.anims.play('up');
    }
    else if (J2Bas.isDown) {
        //console.log("bas");
        player.y += 20;
        player.anims.play('down');
    }
    else if (J2Droite.isDown) {
        //console.log("droite");
        player.x += 20;
        player.anims.play('right');
    }
    else if (J2Gauche.isDown) {
        //console.log("gauche");
        player.x -= 20;
        player.anims.play('left');
    }
    else {
        player.anims.stop();
        player.anims.play('face');
    }
    
}


function click(tileset) {
    tileset.on('pointerdown', function (pointer) {
        //console.log("click sur", tileset.texture.key);
        if (this.isTinted) {
            this.clearTint();
        } else {
            this.setTint(0xCDB751);
        }
    })
}


function calculPixelX(x) {
    let test2 = x * /*256*/ 64;
    return test2;
}

function calculPixelY(y) {
    let test2 = y * /*128*/ 64;
    return test2;

}

function movePlayer2(player, x, y) {

    let speed = 50;
    //console.log('x:', player.x, 'y:', player.y);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    var playerXRound = Math.round(player.x);
    var playerYRound = Math.round(player.y);

    let cartX = player.x;
    let cartY = player.y;
    let isoX = cartX - cartY; 
    let isoY = (cartX + cartY) / 2;
    //console.log("Iso", isoX, isoY, "Cart", player.x, player.y);

    if (playerXRound < x-25 || playerXRound > x+25 || playerYRound < y-25 || playerYRound > y +25) {
        if (playerXRound > x) {
            player.body.velocity.x -= speed;
            player.anims.play('left');

        }
        if (playerXRound < x) {
            player.body.velocity.x += speed;
            player.anims.play('right');

        }
        if (playerYRound > y) {
            player.body.velocity.y -= speed;
            player.anims.play('up');
        }
        if (playerYRound < y) {
            player.body.velocity.y += speed;
            player.anims.play('down');
        }
    } else {
        player.anims.stop();
        player.anims.play('face');
        return 1;
    }
}

function cheminPath() {
    let x, y;
    if (destination == -1 && cheminSize >= 1) {
        destination = cheminSize-1;
        destinationInter = 0;
    }
    if (chemin != undefined) {
        let coords = chemin[destinationInter];
        x = coords[1];
        y = coords[0];
        
        /*
        newCoordX = calculPixelX(x);
        newCoordY = calculPixelY(y);
        newCoordX = Math.round(newCoordX);
        newCoordY = Math.round(newCoordY);
        */
       let pos = convert([x,y]);
        if (movePlayer2(player,pos[0],pos[1])) {
            if (destinationInter < cheminSize) destinationInter++;
        }
    }
}


let convertMatrix = (function (){

  

    return {
        posX(x,y){
            return(145 + x * 128  - y * 128);
        },

        posY(x,y){
            return(280 + y * 70);
        }
    }

})();

function convertMatrixX(tileCoordX) {
    return(145 + tileCoordX * 128);
}


function convertMatrixY(tileCoordY) {
    return(280 + tileCoordY * 70);
}

function convert([x, y]) {
    let posX = 145 + x * 128  - y * 128;
    let posY = 280 + y * 70  + x * 70;

    return [posX, posY];
}


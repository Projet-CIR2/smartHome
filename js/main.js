let config = {
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

let controls;

let game = new Phaser.Game(config);

let player, J2Haut, J2Bas, J2Gauche, J2Droite, layer1, layer2, layer3, collisions, map, sprite, clickImg, housebarre;

let chronoTexte, monTimer, chrono = 100;

let matrixMap, chemin, cheminSize;

let newCoordX, newCoordY, testt, destination = -1, destinationInter = -1;

let isoX, isoY, text;

let mapWidth, mapHeight;

function preload() {

    this.load.image('tempHouse', '../img/tqt.png');

    this.load.tilemapTiledJSON('map', '../testPathfinding/map1.json');
    //this.load.tilemapTiledJSON('map', '../testPathfinding/newmaptest.json');
    this.load.image('tiles', '../testPathfinding/newtiles.png');

    //this.load.spritesheet('perso1', '../img/perso1_45x60.png', { frameWidth: 45, frameHeight: 60 });
    this.load.spritesheet('perso1', '../img/player.png', { frameWidth: 256, frameHeight: 512 });
    this.load.image('button', '../img/button.png');

    this.load.image('back', '../img/back.png');
}

function create() {
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

    let matrixMap = new Array(mapHeight);
    for (let i = 0; i < mapHeight; i++) {
        matrixMap[i] = new Array(mapWidth);
    }

    let coucou = map.layers[4].data;
    console.log(matrixMap);

    for (let u = 0; u < mapHeight; u++) {
        for (let v = 0; v < mapWidth; v++) {
            if (coucou[u][v].index == -1) {
                matrixMap[u][v] = 0;
            }
            else {
                matrixMap[u][v] = 1;
            }
        }
    }

    socket.emit('matrix', matrixMap, mapWidth, mapHeight, [3,2,2,11]);
    
    socket.on('path', path => {
        chemin = path;
        console.log(path);
        cheminSize = path.length;

    });
    

    collisions = this.physics.add.staticGroup();

    clickImg = this.add.sprite(0, 0, 'tempHouse');
    clickImg.setInteractive();

    // let button = this.add.sprite(500, 500, 'button');
    // button.setInteractive();

    click(clickImg);
    // click(button);

    let tilesets = map.addTilesetImage('tiles', 'tiles');
    //console.log(map);

    layer1 = map.createLayer('sol', tilesets);
    layer2 = map.createLayer('walls_1', tilesets);
    layer3 = map.createLayer('meubles', tilesets);

    let cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setZoom(0.4);

    let controlConfig = {
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


    let pos = convert([2,3]);
    player = this.physics.add.sprite(pos[0],pos[1], 'perso1');

    player.body.bounce.y = 0.1;
    //player.setCollideWorldBounds(true);
    //player.body.setSize(43, 24, 2, 40);

    // console.log(layer1.layer.data.length);
    // console.log(layer1.layer.data[0].length);
    for (let y = 0; y < layer1.layer.data.length; y++) {
        for (let x = 0; x < layer1.layer.data[0].length; x++) {
            new Polygon(this, x, y);
        }
    }

    // new Polygon(this, 1, 1);
    // let polygon = new Phaser.Geom.Polygon('0 66 0 223 129 159 129 0');
    // this.physics.add.existing(polygon);

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

    // this.input.on('pointerdown', function(pointer){
    //     console.log(pointer.x);
    //     console.log(pointer.y);
    // });
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


    let speedX = 10;
    let speedY = speedX/2;
    if (J2Haut.isDown) {
        //console.log("haut");
        player.y -= speedY;
        player.x += speedX;
        player.anims.play('up');
    }
    else if (J2Bas.isDown) {
        //console.log("bas");
        player.y += speedY;
        player.x -= speedX;
        player.anims.play('down');
    }
    else if (J2Droite.isDown) {
        //console.log("droite");
        player.x += speedX;
        player.y += speedY;
        player.anims.play('right');
    }
    else if (J2Gauche.isDown) {
        //console.log("gauche");
        player.x -= speedX;
        player.y -= speedY;
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

    let speedX = 50;
    let speedY = speedX/2
    //console.log('x:', player.x, 'y:', player.y);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    let playerXRound = Math.round(player.x);
    let playerYRound = Math.round(player.y);

    let cartX = player.x;
    let cartY = player.y;
    let isoX = cartX - cartY; 
    let isoY = (cartX + cartY) / 2;
    //console.log("Iso", isoX, isoY, "Cart", player.x, player.y);

    if (playerXRound < x-25 || playerXRound > x+25 || playerYRound < y-25 || playerYRound > y +25) {
        if (playerXRound > x) {
            player.body.velocity.x -= speedX;
            player.body.velocity.y -= speedY;
            player.anims.play('left');

        }
        if (playerXRound < x) {
            player.body.velocity.x += speedX;
            player.body.velocity.y += speedY
            player.anims.play('right');

        }
        if (playerYRound > y) {
            player.body.velocity.y -= speedY;
            player.body.velocity.x += speedY;

            player.anims.play('up');
        }
        if (playerYRound < y) {
            player.body.velocity.y += speedY;
            player.body.velocity.x -= speedX;

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
    let posX = 135 +x*128 - y * 128;
    let posY = 280 + y* 64 + x*64; 

    return [posX, posY];
}

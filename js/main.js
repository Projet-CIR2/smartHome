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

let lastDirection;

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

    socket.emit('matrix', matrixMap, mapWidth, mapHeight, [7,3,2,11]);
    
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


    let pos = convert([3,7]);
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
        frames: this.anims.generateFrameNumbers('perso1', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1

    })
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('perso1', { start: 1, end: 1 }),
        frameRate: 10,
        repeat: -1
    })
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('perso1', { start: 2, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('perso1', { start: 3, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'face',
        frames: this.anims.generateFrameNumbers('perso1', { start: 3, end: 3 }),
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

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    let playerXRound = Math.round(player.x);
    let playerYRound = Math.round(player.y);

    let marge = 2;

    if (playerXRound < x-marge || playerXRound > x+marge || playerYRound < y-marge || playerYRound > y +marge) {
        
        if (playerXRound > x && playerYRound >y) {
            player.body.velocity.x -= speedX;
            player.body.velocity.y -= speedY;
            player.anims.play('left');
            lastDirection = 0;

        }
        if (playerXRound < x && playerYRound < y) {
            player.body.velocity.x += speedX;
            player.body.velocity.y += speedY
            player.anims.play('right');
            lastDirection = 1;


        }
        if (playerYRound > y && playerXRound < x) {
            player.body.velocity.y -= speedY;
            player.body.velocity.x += speedX;

            player.anims.play('up');
            lastDirection = 2;

        }
        if (playerYRound < y && playerXRound > x) {
            player.body.velocity.y += speedY;
            player.body.velocity.x -= speedX;

            player.anims.play('down');
            lastDirection = 3;

        }
    } 
    else {
        player.anims.stop();
        player.x = x;
        player.y = y;
        switch(lastDirection){
            case 0:
                player.anims.play('left');
                break;
            case 1:
                player.anims.play('right');
                break;
            case 2 :
                player.anims.play('up');
                break;
            case 3:
                player.anims.play('down');
                break;
            default:
                player.anims.play('down');
                break;
                
        }
        return 1;
    }
}

function cheminPath() {
    let x, y;
    if (destination == -1 && cheminSize >= 1) {
        destination = cheminSize-1;
        destinationInter = 0;
    }
    if (chemin != undefined && destinationInter <= destination) {
        let coords = chemin[destinationInter];
        x = coords[1];
        y = coords[0];
        
       
       let pos = convert([x,y]);
        if (movePlayer2(player,pos[0],pos[1])) {
            if (destinationInter < cheminSize) destinationInter++;
        }
    }
}




function convert([x, y]) {
    let posX = 135 +x*128 - y * 128;
    let posY = 280 + y* 64 + x*64; 

    return [posX, posY];
}

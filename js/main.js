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

let J2Haut, J2Bas, J2Gauche, J2Droite, layer1, layer2, layer3, layer4, collisions, map, sprite, clickImg, housebarre;

let chronoTexte, monTimer, chrono = 100;

let matrixMap, chemin, cheminSize, pointsInteret, nbHabitants, hab;

let newCoordX, newCoordY, testt, destination = -1, destinationInter = -1;

let isoX, isoY, text;

let mapWidth, mapHeight;

let lastDirection;

let stockageVar = {
    click: false,
    clickPolygon: "",
    stockagePolygones: []
}

let stockageObj = [];

let levelUp, MaJUp, graphics;

let tabObjNivMax =  [];

let nbBarre = 0;

function preload() {

    this.load.image('tempHouse', '../img/tqt.png');


    /*------------- LOAD MAPS -------------*/
    this.load.tilemapTiledJSON('map', '../testPathfinding/map1.json');
    this.load.image('tiles', '../testPathfinding/newtiles.png');

    /*------------- LOAD SPRITES -------------*/
    this.load.spritesheet('0', '../img/pere.png', { frameWidth: 256, frameHeight: 512 });
    this.load.spritesheet('1', '../img/mere.png', { frameWidth: 256, frameHeight: 512 });
    this.load.spritesheet('2', '../img/fils.png', { frameWidth: 256, frameHeight: 512 });




    this.load.image('button', '../img/button.png');

    this.load.image('back', '../img/back.png');

    /*------------- LOAD OBJECTS -------------*/

    this.load.image('Télé', '../tiled/New/salon/tv1.png');
    this.load.image('Box_Internet', '../tiled/New/salon/box1.png');
    this.load.image('Ordinateur', '../tiled/New/salon/computer1.png');
    this.load.image('Robot_Aspirateur', '../tiled/New/robots/cleaner1.png');
    this.load.image('Lumière', '../tiled/New/light/mural1.png');
    this.load.image('Frigo', '../tiled/New/kitchen/frdige1.png');
    this.load.image('Fauteuil', '../tiled/New/salon/canape1.png');
    this.load.image('Gazinière', '../tiled/New/kitchen/furnace1.png');
    this.load.image('Radiateur', '../tiled/New/chauffage/radiateur1.png');
    this.load.image('Lave_Linge', '../tiled/New/buanderie/lavelinge1.png');
    this.load.image('Lave_Vaisselle', '../tiled/New/kitchen/dishwasher1.png');
    //this.load.image('Réveil', '../tiled/New/bedroom/reveil1.png');

    this.load.spritesheet('levelUp', '../img/levelUp.png', { frameWidth: 400, frameHeight: 300 })

    this.load.spritesheet('MaJUp', '../img/MaJ.png', { frameWidth: 90, frameHeight: 90 })

    this.load.audio('music','../img/musiquejeu.mp3')
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


    /*------------- INITIALISATION MAP -------------*/

    nbHabitants = 3;

    map = this.add.tilemap('map');

    mapWidth = map.width;
    mapHeight = map.height;

    let matrixMap = new Array(mapHeight);
    for (let i = 0; i < mapHeight; i++) {
        matrixMap[i] = new Array(mapWidth);
    }

    

    let collisions = map.layers[3].data;

    for (let u = 0; u < mapHeight; u++) {
        for (let v = 0; v < mapWidth; v++) {
            if (collisions[u][v].index == -1) {
                matrixMap[u][v] = 0;
            }
            else {
                matrixMap[u][v] = 1;
            }
        }
    }


    pointsInteret = [];
    

    let layerPtInteret = map.layers[4].data;
    let i = 0;
    for (let u = 0; u < mapHeight; u++) {
        for (let v = 0; v < mapWidth; v++) {
            if (layerPtInteret[u][v].index == 137) {
                pointsInteret[i] = {
                    x: v,
                    y: u
                }
                i++;
            }
            
        }
    }
    
  


    //let test = this.add.sprite(609, 624, 'tempHouse');
    //clickImg.setInteractive();

    // let button = this.add.sprite(500, 500, 'button');
    // button.setInteractive();

    // click(button);


    




    

    /*------------- INITIALISATION TILES/LAYERS -------------*/
    
    let tilesets = map.addTilesetImage('tiles', 'tiles');

    layer1 = map.createLayer('sol', tilesets);
    layer2 = map.createLayer('walls', tilesets);
    layer3 = map.createLayer('meubles', tilesets);
    layer4 = map.createLayer('collisions', tilesets);

    // animation levelUp
    this.levelUp = this.physics.add.sprite(0, 0, 'levelUp');
    this.anims.create({
        key: 'levelUpAnim',
        frames: 'levelUp',
        frameRate: 14,
        // repeat: -1,
        // hideOnComplete: true
    });
    this.levelUp.displayWidth = 150;
    this.levelUp.displayHeight = 100;
    this.levelUp.setAlpha(0);

    //anim MaJ
    this.MaJUp = this.physics.add.sprite(0, 0, 'MaJUp');
    this.anims.create({
        key: 'MaJUpAnim',
        frames: 'MaJUp',
        frameRate: 8,
        // repeat: -1,
        // hideOnComplete: true
    });
    this.MaJUp.displayWidth = 90;
    this.MaJUp.displayHeight = 90;
    this.MaJUp.setAlpha(0);

    let cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setZoom(0.3);

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

    let polygon;
    for (let y = 0; y < layer1.layer.data.length; y++) {
        for (let x = 0; x < layer1.layer.data[0].length; x++) {
            if (layer4.layer.data[y][x].index === 137) {
                polygon = new Polygon(this, x, y);
                stockageVar.stockagePolygones.push(polygon);
                polygon.addEvent();
            }
        }
    }
    let obj;

    graphics = [];
    for (let i = 0; i < 1000; i++) graphics.push(this.add.graphics({ fillStyle: { width: 15, color: 0xff0000 } }));

    for(let y of infoObjet){
      obj = new Objet(y,this,-1000,-1000, graphics, this.levelUp, this.MaJUp);
      obj.visible = false;
      stockageObj.push(obj);
    }

    // new Polygon(this, 1, 1);
    // let polygon = new Phaser.Geom.Polygon('0 66 0 223 129 159 129 0');
    // this.physics.add.existing(polygon);

    
    
    /*------------- INITIALISATION HABITANTS -------------*/

    hab = [];
    for(let i =0; i< nbHabitants; i++){
        let x = getRandomNumberBetween(0, pointsInteret.length-1);
        hab[i] = new Player(this, pointsInteret[x].x, pointsInteret[x].y, i, i.toString());
        hab[i].setVars(matrixMap, mapWidth, mapHeight, pointsInteret);

    }

    



    monTimer = this.time.addEvent({
        delay: 1000,
        callback: compteUneSeconde,
        callbackScope: this,
        loop: true
    });
    //convertTileCoordInScreenCoord(5,5);

    // text = this.add.text(0, 0, 'Move the mouse', { font: '10px Courier', fill: '#00ff00' });

    // this.input.on('pointerdown', function(pointer){
    //     console.log(pointer.x);
    //     console.log(pointer.y);
    // });

    this.sound.play('music');
}

function compteUneSeconde () {
    chrono= chrono-1; // on incremente le chronometre d'une unite
}


function update(time, delta) {    
    for (let objet of stockageObj) {
        if(objet.niveau === 3) {
            tabObjNivMax.push(objet.nom);
        }
    }

    gameView.verifWin(tabObjNivMax);
    gameView.verifLoose();

    controls.update(delta);

    hab.forEach(element => {
       element.update(); 
    });

    // let pointer = this.input.activePointer;

    // text.setText([
    //     'x: ' + pointer.x,
    //     'y: ' + pointer.y,
    //     'mid x: ' + pointer.midPoint.x,
    //     'mid y: ' + pointer.midPoint.y,
    //     'velocity x: ' + pointer.velocity.x,
    //     'velocity y: ' + pointer.velocity.y,
    //     'movementX: ' + pointer.movementX,
    //     'movementY: ' + pointer.movementY
    // ]);
}

function render() {
    game.debug.inputInfo(32, 32);
    game.debug.pointer(game.input.activePointer);
}




function click(tileset) {
    tileset.on('pointerdown', function (pointer) {
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



function convert([x, y]) {
    let posX = 135 +x*128 - y * 128;
    let posY = 280 + y* 64 + x*64;

    return [posX, posY];
}

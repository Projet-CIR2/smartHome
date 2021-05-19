let config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 8 / 12,
    height: window.innerHeight - 56,
    backgroundColor: '#2d2d2d',
    parent: 'game_page',
    pixelArt: true,
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y: 0}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let controls;

let game = new Phaser.Game(config);

let player;
let J2Haut;
let J2Bas;
let J2Gauche;
let J2Droite;
let tileset
let layer1;
let layer2, layer3;
let collisions;
let map;
let J2 = {
    haut: "",
    bas: "",
    gauche: "",
    droite: ""
};
let camera;

function preload() {
    /*
    this.load.image('tempHouse', '../img/tempHouse.png');
    */

    //////////// map de test -> collisions layers fonctionnels
    // this.load.tilemapTiledJSON('mapJson', '../testPathfinding/newmaptest.json');
    // this.load.image('map', '../testPathfinding/map.png');

    this.load.tilemapTiledJSON('map', '../testPathfinding/map.json');
    this.load.image('tiles', '../testPathfinding/tiles.png');

    this.load.spritesheet('perso1', '../assets/img/perso1_45x60.png', {frameWidth: 45, frameHeight: 60});
    this.load.image('button', '../assets/img/button.png');


}

function create() {
    J2.haut = this.input.keyboard.addKey('Z');
    J2.bas = this.input.keyboard.addKey('S');
    J2.gauche = this.input.keyboard.addKey('Q');
    J2.droite = this.input.keyboard.addKey('D');

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

    //////////// map de test -> collisions layers fonctionnels
    // map = this.make.tilemap({key: 'mapJson'});
    // tileset = map.addTilesetImage('map');
    // layer1 = map.createLayer('Calque de Tuiles 1', tileset, 0, 0);
    // layer2 = map.createLayer('collider', tileset, 0, 0);
    // layer2.setCollision(3);

    map = this.make.tilemap({key: 'map'});
    tileset = map.addTilesetImage('tiles');


    layer1 = map.createLayer('sol', tileset, 0, 0);
    layer2 = map.createLayer('walls_doors', tileset, 0, 0);
    layer3 = map.createLayer('meubles', tileset, 0, 0);

    player = new Player(this, 500, 500);

    this.matter.world.convertTilemapLayer(layer1);
    this.matter.world.convertTilemapLayer(layer2);
    this.matter.world.convertTilemapLayer(layer3);

    // change le curseur en curseur cliquable
    // this.input.setDefaultCursor("url(../assets/cursors/pointer.cur), pointer");

    // ajout avec collision d'un mur
    new Polygone(this, 460, 920, 'droite');
}

function update(time, delta) {
    player.movePlayer(J2)
    controls.update(delta);
}
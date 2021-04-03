//Init Jeu
var game = new Phaser.Game(500, 500, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

let cursors, cursors2;
let player;
let val = 0
let randomValue;

function preload() {
    this.load.image('tempHouse', '../img/tempHouse.png');
    this.load.spritesheet('perso1', '../img/perso1_45x60.png', 45, 60);

    this.load.on('progress', function (value) {
        console.log(value);
    });

    this.load.on('fileprogress', function (file) {
        console.log(file.src);
    });
    this.load.on('complete', function () {
        console.log('complete');
    });
}

function create() {
    this.add.image(500, 300, 'tempHouse');

    cursors = this.input.keyboard.createCursorKeys();
    cursors2 = this.input.keyboard.addKeys({
        'P': Phaser.KeyCode.P
    });

    //A voir
    this.stage.backgroundColor = '#ccfbff';
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.state.start('load');

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    cursors2.P.onDown.add(goFull, this);

    player = game.add.sprite(55, 80, 'perso1');
    this.physics.arcade.enable(player);
    initPlayer(player);

    /*
    progress = game.add.graphics(0,0);
    progress.lineStyle(2, '0x000000');
    progress.beginFill('0x000000',1);
    progress.drawRoundedRect(100,50,300,27,10);
    progress.endFill();
    progress.beginFill('0x999999',1) //For drawing progress

    this.progress.drawRoundedRect(101,501,298*percentDone,25,10);
    */
}

function update() {
    movePlayer(player);
}

//Lance le plein ecran
function goFull() {
    if (this.scale.isFullScreen) this.scale.stopFullScreen();
    else this.scale.startFullScreen(false);
}

function initPlayer(perso) {
    //Modifie la taille et active les collisions avec les bords de la map
    perso.body.setSize(43, 24, 2, 40);
    perso.body.collideWorldBounds = true;

    //Découpage des animations du personnage
    perso.animations.add('left', [3, 4, 5], 10, true);
    perso.animations.add('face', [1], 1, true);
    perso.animations.add('back', [10], 1, true);
    perso.animations.add('right', [6, 7, 8], 10, true);
    perso.animations.add('down', [0, 1, 2], 10, true);
    perso.animations.add('up', [9, 10, 11], 10, true);
    perso.sendToBack();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function movePlayer(player) {
    if (val % 50 == 0) {
        randomValue = getRandomInt(5);
    }
    val++;

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
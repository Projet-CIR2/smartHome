//Init Jeu
var game = new Phaser.Game(1180, 720, Phaser.AUTO, '', {
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

function preload() {
    game.load.spritesheet('button', '/img/button.png', 960, 480);
    game.load.image('tempHouse', '../img/tempHouse.png');
    game.load.spritesheet('perso1', '../img/perso1_45x60.png', 45, 60);
}

function create() {
    //	You can listen for each of these events from Phaser.Loader
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);

    //	Just to kick things off
    button = game.add.button(game.world.centerX - 140, 220, 'button', start, this, 2, 1, 0);
    button.width = 240;
    button.height = 120;

    //	Progress report
    text = game.add.text(game.world.centerX - 95, game.world.centerY - 95, 'Start Game', { fill: '#ffffff' });

    game.stage.backgroundColor = '#182d3b'

    cursors = this.input.keyboard.createCursorKeys();
    cursors2 = this.input.keyboard.addKeys({
        'P': Phaser.KeyCode.P
    });
    
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    cursors2.P.onDown.add(goFull, this);
    
}

function update() {
    if(button.visible == false) {
        movePlayer(player);
    }
    
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

function start() {
    player = game.add.sprite(55, 80, 'perso1');
    this.physics.arcade.enable(player);
    initPlayer(player);

    text.visible = false;
    button.visible = false;
}
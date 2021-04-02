//Init Jeu
var game = new Phaser.Game(1080, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

let cursors, cursors2;
let player;

function preload() {
    this.load.image('tempHouse', '../img/tempHouse.png');
    this.load.spritesheet('perso1', '../img/perso1_45x60.png', 45, 60);
}

function create() {
    this.add.image(500, 300, 'tempHouse');

    cursors = this.input.keyboard.createCursorKeys();
    cursors2 = this.input.keyboard.addKeys({
        'P': Phaser.KeyCode.P
    });

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    cursors2.P.onDown.add(goFull, this);

    player = game.add.sprite(55, 80, 'perso1');
    this.physics.arcade.enable(player);
    initPlayer(player);
}

function update() {
   setInterval(movePlayer(player),10000);
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
    let randomValue = getRandomInt(5);

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
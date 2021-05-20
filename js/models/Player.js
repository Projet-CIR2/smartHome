class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'perso1');

        // scene.add.existing(this);

        this.initAnim();

        // this.setCollisionGroup(1);
        // this.setCollidesWith(0);
    }

    initAnim() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('perso1', {start: 3, end: 5}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('perso1', {start: 6, end: 8}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('perso1', {start: 9, end: 11}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('perso1', {start: 0, end: 2}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'face',
            frames: this.anims.generateFrameNumbers('perso1', {start: 1, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'back',
            frames: this.anims.generateFrameNumbers('perso1', {start: 10, end: 10}),
            frameRate: 10,
            repeat: -1
        });
    }

    movePlayer(J2) {
        if (J2.haut.isDown) {
            player.y -= 10;
            player.anims.play('up');
        } else if (J2.bas.isDown) {
            player.y += 10;
            player.anims.play('down');
        } else if (J2.droite.isDown) {
            player.x += 10;
            player.anims.play('right');
        } else if (J2.gauche.isDown) {
            player.x -= 10;
            player.anims.play('left');
        } else {
            player.anims.stop();
            player.anims.play('face');
        }
    }
}
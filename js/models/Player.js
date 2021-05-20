class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, id){
        
        const idPlayer = "perso" + id.toString();

        super(scene, x, y, idPlayer);
        scene.add.existing(this);

        this.initAnim();

    }

    initAnim() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(idPlayer, { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
    
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(idPlayer, { start: 1, end: 1 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(idPlayer, { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(idPlayer, { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'face',
            frames: this.anims.generateFrameNumbers(idPlayer, { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        

    }
}
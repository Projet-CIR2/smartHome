class Barre extends Phaser.GameObjects.Rectangle {
    constructor(scene, graphics, sprite, size, x, y) {
        super(scene, x - 70, y - 80, size + 80, 20);
        scene.add.existing(this);
        this.sprite = sprite;
        this.size = size + 80;
        this.graphics = graphics;

        this.graphics.fillRect(this.x, this.y, size + 80, 20);
    }

    modifBarre(value, maxTime) {
        let tmp = value * (180) / maxTime;
        if (tmp > 180) {
            tmp = 180;
        }
        this.graphics.fillStyle(0xff0000);
        if (tmp >= 0) {
            let d = Math.floor(this.size / this.size * tmp);
            this.graphics.fillRect(this.x, this.y, d, 20);

            this.draw(d);
        }

    }

    draw(d) {
        this.graphics.fillStyle(0xffffff);
        this.graphics.fillRect(this.x + d, this.y, 180 - d, 20);
    }
}

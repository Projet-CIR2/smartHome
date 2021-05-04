class Barre {
    constructor(graphics, sprite, size) {
        
        this.graphics = graphics;
        this.rect1 = new Phaser.Geom.Rectangle(-100, -150, size, 25); $

        this.sprite = sprite;
        this.size = size;
    }

    modifBarre(value) {
        if (value < 0) {
            value = 0;
        }
        if (value < 30) {
            this.graphics.fillStyle(0xff0000);
        }
        else {
            this.graphics.fillStyle(0x00ff00);
        }
        var d = Math.floor(this.size / 100 * value);
        this.graphics.fillRect(-100, -150, d, 25);

        this.draw(d);
    }

    draw(d) {
        this.graphics.fillStyle(0xffffff);
        this.graphics.fillRect(-100 + d, -150, this.size - d, 25);
    }
}
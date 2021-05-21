class Barre extends Phaser.GameObjects.Rectangle {
    constructor(scene, graphics, sprite, size, x, y) {
        super(scene, x, y, size, 20)
        //this.setPosition(this.x, this.y);
        this.displayOriginX = x;
        this.displayOriginY = y;
        console.log("barre", x, y, this.displayOriginX, this.displayOriginY);

        this.graphics = graphics;
        //this.rect1 = new Phaser.GameObjects.Rectangle(x, y, size, 20);
        //this.rect1.setOrigin(x,y);
        //console.log(this.rect1);

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
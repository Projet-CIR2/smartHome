class Barre extends Phaser.GameObjects.Rectangle {
    constructor(scene, graphics, sprite, size, x, y) {
        super(scene, x, y, size, 20)

        this.sprite = sprite;
        this.size = size+80;
        this.graphics = graphics;
        
        this.rect = new Phaser.Geom.Rectangle(x-70, y-80, size+80, 20);
        
        this.graphics.fillRectShape(this.rect);
    }

    modifBarre(value, maxTime) {
        let tmp = value*(180)/maxTime;
        if(tmp > 180) {
            tmp = 180;
        }
        if (value < 0) {
            value = 0;
        }
        if (value < 30) {
            this.graphics.fillStyle(0xff0000);
        }
        else {
            this.graphics.fillStyle(0x00ff00);
        }
        if(tmp >= 0) {
            var d = Math.floor(this.size / this.size * tmp);
            this.graphics.fillRect(this.rect.x, this.rect.y, d, 20);

            this.draw(d);
        }else {
            //Supp rectangle
        }
        
    }

    draw(d) {
        this.graphics.fillStyle(0xffffff);
        this.graphics.fillRect(this.rect.x + d, this.rect.y, 180 - d, 20);
    }
}
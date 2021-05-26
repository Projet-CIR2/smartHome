class Barre {
    constructor(scene, graphics, sprite, size, x, y,) {
        scene.add.existing(this);
        this.sprite = sprite;
        this.size = size + 80;

        this.graphics = graphics[nbBarre++];
        this.graphics.alpha = 1;

        this.x = x - 70;
        this.y = y - 80;

        console.log(this.graphics);
        this.barre = this.graphics.fillRect(this.x, this.y, size + 80, 20);

        // this.graphics.setPosition(0, 0);
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

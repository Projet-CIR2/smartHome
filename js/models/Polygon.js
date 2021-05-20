class Polygon {
    constructor(scene, xTemp, yTemp) {
        this.x = xTemp;
        this.y = yTemp;
        let xPos = 127 + this.x * 128 - this.y * 128;
        let yPos = 445 + this.y * 64 + this.x * 64;
        let shape = '126 0 255 66 129 127 0 63';
        this.polygon = scene.add.polygon(xPos, yPos, shape/*, 0xffffff*/);
        this.polygon.setInteractive();

        this.polygon.setFillStyle(0xff0000, 0);
    }

    addEvent() {
        this.polygon.on('pointerdown', () => {
            if (!stockageVar.click) {
                stockageVar.click = true;
                stockageVar.clickPolygon = this;
                this.addAlpha();
            } else {
                if (stockageVar.clickPolygon.x === this.x && stockageVar.clickPolygon.y === this.y) {
                    this.removeAlpha();
                    stockageVar.click = false;
                } else {
                    stockageVar.clickPolygon.removeAlpha();
                    stockageVar.clickPolygon = this;
                    this.addAlpha();
                }
            }
            console.log(stockageVar);

        });
    }

    addAlpha() {
        this.polygon.fillAlpha = 0.2;
    }

    removeAlpha() {
        console.log(this.polygon.fillAlpha);
        this.polygon.fillAlpha = 0;
        console.log(this.polygon.fillAlpha);
    }
}
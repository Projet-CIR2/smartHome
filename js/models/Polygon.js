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

        this.objet = undefined;
    }

    addEvent() {
        this.polygon.on('pointerdown', () => {
            if (this.objet === undefined) {
                if (!stockageVar.click) {
                    stockageVar.click = true;
                    stockageVar.clickPolygon = this;
                    this.addAlpha();
                    this.refreshUpgrade();
                } else {
                    if (stockageVar.clickPolygon.x === this.x && stockageVar.clickPolygon.y === this.y) {
                        this.removeAlpha();
                        stockageVar.click = false;
                        this.refreshUpgrade();
                    } else {
                        stockageVar.clickPolygon.removeAlpha();
                        stockageVar.clickPolygon = this;
                        this.addAlpha();

                        this.refreshUpgrade();
                    }
                }
            } else {
                this.refreshUpgrade();
            }
        });
    }

    refreshUpgrade() {
        if (document.getElementById('d_Upgrade') !== null) {
            scriptMagique.clean();
            scriptMagique.clickUpgrade();
            achat.verif('Upgrade', this);
        }
    }

    addAlpha() {
        this.polygon.fillAlpha = 0.2;
    }

    removeAlpha() {
        this.polygon.fillAlpha = 0;
    }
}

class Polygon {
    constructor(scene, xTemp, yTemp) {
        this.scene = scene;
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
        // au click
        this.polygon.on('pointerdown', () => {
            // si on a pas d'objet sur la case
            if (this.objet === undefined) {
                // si c'est le premier click
                if (!stockageVar.click) {
                    stockageVar.click = true;
                    stockageVar.clickPolygon = this;
                    this.addAlpha();
                    this.refreshUpgrade();
                } else {
                    // si le deuxième click est sur la même case que le premier click, on enlève la couleur de la case
                    if (stockageVar.clickPolygon.x === this.x && stockageVar.clickPolygon.y === this.y) {
                        this.removeAlpha();
                        stockageVar.click = false;
                        this.refreshUpgrade();
                    } else {
                        // sinon on supprime la couleur de l'ancienne case et on ajoute la couleur à la nouvelle
                        stockageVar.clickPolygon.removeAlpha();
                        stockageVar.clickPolygon = this;
                        this.addAlpha();

                        this.refreshUpgrade();
                    }
                }
            } else {
                this.refreshUpgrade();

                stockageVar.clickPolygon.removeAlpha();
                stockageVar.clickPolygon = this;


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

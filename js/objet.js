class Objet extends Phaser.Physics.Arcade.Sprite {
    constructor(objet, scene, x, y, graphics, up) {
        super(scene, x, y, objet.nom);
        this.objet = objet;
        this.graphics = graphics;
        this.barre = undefined;
        this.scene = scene;
        this.up = up;
        this.niveauMaJ = 0

        this.infosNiveauMaJ;
        this.verifMaJ = false;
        
        scene.add.existing(this);

        this.on('pointerdown', function (pointer) {
            if (stockageVar.click) this.setTint(0x87CEEB);
            else {
                switch (this.etat) {
                    case 2:
                        this.setTint(0xFFA07A);
                        break;
                    case 1:
                        this.setTint(0xFA8072);
                        break;
                    case 1:
                        this.setTint(0xDC143C);
                        break;
                    default:
                        this.clearTint();
                }
            }
        });

        this.nom = this.objet.nom;
        this.niveau = 1; //niveau de l'objet
        this.infosNiveau = this.objet.niveau1; //niveau de l'objet
        this.infosNiveauMaJ = this.objet.niveau1;
        this.coutDebit = 0; // cout en debit de l'amelioration et reparation
        this.etat = 3; // etat de l'objet il y en a 4 (bon/moyen/mauvais/casser)
        this.tmpEtat = 0; // temps avant que l'objet soit cassé
        this.coutReparation = 0; //prix de la réparation
        this.tmpReparation = 0; // temps avant la réparation fini
        this.coutAmelioration = 0; //prix de l'amélioration
        this.tmpAmelioration = 0; // temps avant l'amelioration fini
        this.bonheur = 0 //generation de bonheur de l'objet

        this.tmpEtat = monModule.rand(objet.niveau1.tempsEtat, objet.niveau1.tempsEtat + 10);
        this.coutDebit = monModule.rand(objet.niveau1.coutDebit, objet.niveau1.coutDebit + 3);
        this.bonheur = objet.niveau1.bonheur;

        this.coutReparation = monModule.rand(objet.niveau1.coutReparation, objet.niveau1.coutReparation + 10);
        this.tmpReparation = monModule.rand(objet.niveau1.tempsReparation, objet.niveau1.tempsReparation + 3);

        this.coutAmelioration = monModule.rand(objet.niveau1.coutAmelioration, objet.niveau1.coutAmelioration + 15);
        this.tmpAmelioration = monModule.rand(objet.niveau1.tempsAmelioration, objet.niveau1.tempsAmelioration + 5);

    }

    preview() {
        console.log("type", this.type);
        console.log("niveau", this.niveau);
        console.log("debit", this.coutDebit);
        console.log("etat", this.etat);
        console.log("tmp_etat", this.tmpEtat);
        console.log("cout", this.coutReparation);
        console.log("tmp_reparation", this.tmpReparation);
        console.log("amelioration", this.coutAmelioration);
        console.log("tmp_reparation", this.tmpAmelioration);

    }

    update() {//mettre a jour l'objet
        let tempo = (this.tmpReparation) * 1000;
        setTimeout(() => {
            this.etat = 3;
        }, tempo);
    }

    upgrade() {//ameliorer l'objet
        let tempo = (this.tmpAmelioration) * 1000;
        setTimeout(() => {
            ++this.niveau;
            this.etat = 3;
            if (this.niveau === 2) {
                this.tmpEtat = monModule.rand(objet.niveau2.tempsEtat, objet.niveau2.tempsEtat + 10);
                this.coutDebit = monModule.rand(objet.niveau2.coutDebit, objet.niveau2.coutDebit + 3);
                this.bonheur = objet.niveau2.bonheur;

                this.coutReparation = monModule.rand(objet.niveau2.coutReparation, objet.niveau2.coutReparation + 10);
                this.tmpReparation = monModule.rand(objet.niveau2.tempsReparation, objet.niveau2.tempsReparation + 3);

                this.coutAmelioration = monModule.rand(objet.niveau2.coutAmelioration, objet.niveau2.coutAmelioration + 15);
                this.tmpAmelioration = monModule.rand(objet.niveau2.tempsAmelioration, objet.niveau2.tempsAmelioration + 5);
            }
            if (this.niveau === 3) {
                this.tmpEtat = monModule.rand(objet.niveau3.tempsEtat, objet.niveau3.tempsEtat + 10);
                this.coutDebit = monModule.rand(objet.niveau3.coutDebit, objet.niveau3.coutDebit + 3);
                this.bonheur = objet.niveau2.bonheur;

                this.coutReparation = monModule.rand(objet.niveau3.coutReparation, objet.niveau3.coutReparation + 10);
                this.tmpReparation = monModule.rand(objet.niveau3.tempsReparation, objet.niveau3.tempsReparation + 3);

                this.coutAmelioration = monModule.rand(objet.niveau3.coutAmelioration, objet.niveau3.coutAmelioration + 15);
                this.tmpAmelioration = monModule.rand(objet.niveau3.tempsAmelioration, objet.niveau3.tempsAmelioration + 5);
            }

        }, tempo);
    }

    degrade() {
        let tempo = (this.tmpEtat) * 1000;
        while (this.etat !== 0) {
            setTimeout(() => {
                --this.etat;
                tempo = (this.tmpEtat) * 1000;
            }, tempo);
            switch (this.etat) {
                case 2:
                    this.setTint(0xFFA07A);
                    break;
                case 1:
                    this.setTint(0xFA8072);
                    break;
                case 0:
                    this.setTint(0xDC143C);
                    break;
                default:
                    this.clearTint();
            }
        }
        if (this.etat === 0) {
            this.bonheur = -this.bonheur;
        }
    }

    position(x, y) {
        this.x = x;
        this.y = y;

        let xPos = 127 - 30 + this.x * 128 - this.y * 128;
        let yPos = 445 - 205 + this.y * 64 + this.x * 64;

        this.setX(xPos);
        this.setY(yPos);

        this.visible = true;
    }

    levelUp() {
       
        if (this.niveau <= 3) {
            this.niveau++;
            this.verifMaJ = false;
            switch (this.niveau) {
                case 2:
                    this.infosNiveau = this.objet.niveau2;
                    break;
                case 3:
                    this.infosNiveau = this.objet.niveau3;
                    break;
                default:
                    break;
            }
        }
        switch(this.niveauMaJ) {
            case 0:
                this.infosNiveauMaJ = this.objet.niveau1;
                break;
            case 1:
                this.infosNiveauMaJ = this.objet.niveau2;
                break;
            case 2:
                this.infosNiveauMaJ = this.objet.niveau3;
                break;
            default: 
                break;
        }
        this.animUp();
    }

    animUp(boucle) {
        this.up.setAlpha(1);
        // this.up.anims.restart();
        this.up.x = this.x+10;
        this.up.y = this.y-150;
        console.log("anim ", this.up.x, this.up.y);

        this.up.play('levelUpAnim');
        this.up.once('animationcomplete', () => {
            console.log('fini');
            this.up.setAlpha(0);
            if (boucle === undefined) this.animUp(true);
        });
    }
    getNiveau() {
        return this.niveau;
    }
    addBarre()  {
        this.barre = new Barre(this.scene, this.graphics, this.objet, 100, this.x, this.y);
    }
}

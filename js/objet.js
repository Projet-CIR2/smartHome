class Objet extends Phaser.Physics.Arcade.Sprite{
  constructor(type, scene, x, y, img, stat) {
    super(scene, x, y, img);

    this.physics.add.existing(this, true);

    this.on('pointerdown', function (pointer) {
        if(!this.isTinted) this.setTint(0x87CEEB);
        else this.clearTint();
    });

    this.type = type; //de quel objet il s'agit
    this.niveau = 1; //niveau de l'objet
    this.coutDebit=0; // cout en debit de l'amelioration et reparation
    this.etat = 3; // etat de l'objet il y en a 4 (bon/moyen/mauvais/casser)
    this.tmpEtat = 0; // temps avant que l'objet soit cassé
    this.coutReparation = 0; //prix de la réparation
    this.tmpReparation = 0; // temps avant la réparation fini
    this.coutAmelioration = 0; //prix de l'amélioration
    this.tmpAmelioration = 0; // temps avant l'amelioration fini
    this.bonheur = 0 //generation de bonheur de l'objet

    this.tmpEtat = monModule.rand(stat.niveau1.tempsEtat,stat.niveau1.tempsEtat+10);
    this.coutDebit = monModule.rand(stat.niveau1.coutDebit,stat.niveau1.coutDebit+3);
    this.bonheur = stat.niveau1.bonheur;

    this.coutReparation = monModule.rand(stat.niveau1.coutReparation,stat.niveau1.coutReparation+10);
    this.tmpReparation = monModule.rand(stat.niveau1.tempsReparation,stat.niveau1.tempsReparation+3);

    this.coutAmelioration = monModule.rand(stat.niveau1.coutAmelioration,stat.niveau1.coutAmelioration+15);
    this.tmpAmelioration = monModule.rand(stat.niveau1.tempsAmelioration,stat.niveau1.tempsAmelioration+5);

  }
  preview(){
    console.log("type",this.type);
    console.log("niveau",this.niveau);
    console.log("debit",this.coutDebit);
    console.log("etat",this.etat);
    console.log("tmp_etat",this.tmpEtat);
    console.log("cout",this.coutReparation);
    console.log("tmp_reparation",this.tmpReparation);
    console.log("amelioration",this.coutAmelioration);
    console.log("tmp_reparation",this.tmpAmelioration);

  }

  update() {//mettre a jour l'objet
    let tempo = (this.tmpReparation)*1000;
    setTimeout(()=>{
      this.etat = 3;
    },tempo);
  }

  upgrade() {//ameliorer l'objet
    let tempo = (this.tmpAmelioration)*1000;
    setTimeout(()=>{
      ++this.niveau;
      this.etat = 3;
      if(this.niveau === 2){
        this.tmpEtat = monModule.rand(stat.niveau2.tempsEtat,stat.niveau2.tempsEtat+10);
        this.coutDebit = monModule.rand(stat.niveau2.coutDebit,stat.niveau2.coutDebit+3);
        this.bonheur = stat.niveau2.bonheur;

        this.coutReparation = monModule.rand(stat.niveau2.coutReparation,stat.niveau2.coutReparation+10);
        this.tmpReparation = monModule.rand(stat.niveau2.tempsReparation,stat.niveau2.tempsReparation+3);

        this.coutAmelioration = monModule.rand(stat.niveau2.coutAmelioration,stat.niveau2.coutAmelioration+15);
        this.tmpAmelioration = monModule.rand(stat.niveau2.tempsAmelioration,stat.niveau2.tempsAmelioration+5);
      }
      if(this.niveau === 3){
        this.tmpEtat = monModule.rand(stat.niveau3.tempsEtat,stat.niveau3.tempsEtat+10);
        this.coutDebit = monModule.rand(stat.niveau3.coutDebit,stat.niveau3.coutDebit+3);
        this.bonheur = stat.niveau2.bonheur;

        this.coutReparation = monModule.rand(stat.niveau3.coutReparation,stat.niveau3.coutReparation+10);
        this.tmpReparation = monModule.rand(stat.niveau3.tempsReparation,stat.niveau3.tempsReparation+3);

        this.coutAmelioration = monModule.rand(stat.niveau3.coutAmelioration,stat.niveau3.coutAmelioration+15);
        this.tmpAmelioration = monModule.rand(stat.niveau3.tempsAmelioration,stat.niveau3.tempsAmelioration+5);
      }

    },tempo );
  }

  degrade(){
    let tempo = (this.tmpEtat)*1000;
    while(this.etat !== 0)
    setTimeout(()=>{
      --this.etat;
      tempo=(this.tmpEtat)*1000;
    },tempo );
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

    }
  }
}

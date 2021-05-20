let stock = 1;

class Objet extends Phaser.Physics.Arcade.Sprite{
  constructor(type, valeur, scene, x, y, img) {
    super(scene, x, y, img);

    this.physics.add.existing(this, true);

    this.on('pointerdown', function (pointer) {
        if(!this.isTinted) this.setTint(0xff0000);
        else this.clearTint();
    });
    this.type = type; //de quel objet il s'agit
    this.difficulte = valeur; //représente l'importance de l'objet
    this.cout_reparation = 0; //prix de la réparation
    this.niveau = 1; //niveau de l'objet
    this.cout_amelioration = 0; //prix de l'amélioration
    this.etat = 4; // etat de l'objet il y en a 4 (bon/moyen/mauvais/casser)
    this.tmp_etat = 0; // temps avant que l'objet soit cassé
    this.tmp_reparation = 0; // temps avant la réparation fini
    this.tmp_amelioration = 0;
    this.id = stock;
    this.coutDebit=0;
    ++stock;
    if(this.difficulte===1){ //valeur non officiel
      this.cout_reparation = monModule.rand(5,10);
      this.cout_amelioration = monModule.rand(50,200);
      this.tmp_etat = monModule.rand(100,300);
      this.tmp_reparation = monModule.rand(25,30);
      this.tmp_amelioration = monModule.rand(100,130);
      this.coutDebit = monModule.rand(15,20);
    }
    if(this.difficulte===2){
      this.cout_reparation = monModule.rand(15,20);
      this.cout_amelioration = monModule.rand(150,300);
      this.tmp_etat = monModule.rand(200,400);
      this.tmp_reparation = monModule.rand(30,50);
      this.tmp_amelioration = monModule.rand(150,180);
      this.coutDebit = monModule.rand(20,25);
    }
    if(this.difficulte===3){
        this.cout_reparation = monModule.rand(25,30);
        this.cout_amelioration = monModule.rand(250,300);
        this.tmp_etat = monModule.rand(300,500);
        this.tmp_reparation = monModule.rand(50,70);
        this.tmp_amelioration = monModule.rand(180,210);
        this.coutDebit = monModule.rand(25,30);
    }
  }
  preview(){
    console.log("type",this.type);
    console.log("difficulte",this.difficulte);
    console.log("cout",this.cout_reparation);
    console.log("niveau",this.niveau);
    console.log("amelioration",this.cout_amelioration);
    console.log("etat",this.etat);
    console.log("tmp_etat",this.tmp_etat);
    console.log("tmp_reparation",this.tmp_reparation);
  }

  update() {//mettre a jour l'objet
    let tempo1 = (this.tmp_reparation)*1000;
    setTimeout(()=>{
      this.etat = 4;
    },tempo1);
  }
  upgrade() {//ameliorer l'objet
    if(this.niveau<5){
      let tempo2 = (this.tmp_amelioration)*1000;
      setTimeout(()=>{
        this.etat = 4;
        ++this.niveau;
        this.amelioration = monModule.rand(this.amelioration,this.amelioration+100);
        this.tmp_etat = monModule.rand(this.tmp_etat,this.tmp_etat+100);
        this.tmp_reparation = monModule.rand(this.tmp_reparation-5,this.tmp_reparation);
        this.cout = monModule.rand(this.cout-5,this.cout);
        this.coutDebit = monModule.rand(this.coutDebit-3,this.coutDebit);
        for(let i=2;i<6;i++){
          if(this.niveau===i){
            switch (i) {
              case 2:
                this.setTint(0xADD8E6);
                break;
              case 3:
                this.setTint(0x87CEEB);
                break;
              case 4:
                this.setTint(0x00BFFF);
                break;
              case 5:
                this.setTint(0x4169E1);
                break;
            }
          }
        }
    },tempo2 );
    }
  }
}

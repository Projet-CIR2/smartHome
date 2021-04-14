var stock = 1;

class Objet {
  constructor(type, valeur) {
    this.type = type; //de quel objet il s'agit
    this.difficulte = valeur; //représente l'importance de l'objet
    this.cout = 0; //prix de la réparation
    this.niveau = 1; //niveau de l'objet
    this.amelioration = 0; //prix de l'amélioration
    this.etat = 4; // etat de l'objet il y en a 4 (bon/moyen/mauvais/casser)
    this.tmp_etat = 0; // temps avant que l'objet soit cassé
    this.tmp_reparation = 0; // temps avant la réparation fini
    this.id = stock;
    this.coutDebit=0;
    ++stock;
    if(this.difficulte===1){ //valeur non officiel
      this.cout = monModule.rand(30,100);
      this.amelioration = monModule.rand(50,200);
      this.tmp_etat = monModule.rand(100,300);
      this.tmp_reparation = monModule.rand(10,30);
    }
    if(this.difficulte===2){
      this.cout = monModule.rand(130,200);
      this.amelioration = monModule.rand(150,300);
      this.tmp_etat = monModule.rand(200,400);
      this.tmp_reparation = monModule.rand(100,130);
    }
    if(this.difficulte===3){
        this.cout = monModule.rand(230,300);
        this.amelioration = monModule.rand(250,300);
        this.tmp_etat = monModule.rand(300,500);
        this.tmp_reparation = monModule.rand(200,330);
    }
  }
  preview(){
    console.log(this.type);
    console.log(this.difficulte);
    console.log(this.cout);
    console.log(this.niveau);
    console.log(this.amelioration);
    console.log(this.etat);
    console.log(this.tmp_etat);
    console.log(this.tmp_reparation);
  }

  update() {//mettre a jour l'objet
    console.log('maj', this.coutDebit);
  }
  upgrade() {//ameliorer l'objet

  }
}

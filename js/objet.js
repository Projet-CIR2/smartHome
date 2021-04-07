class Objet {
  constructor(type, value) {
    this.type = type; //de quel objet il s'agit
    this.valeur = value; //représente l'importance de l'objet
    this.cout = 0; //prix de la réparation
    this.niveau = 1; //niveau de l'objet
    this.amélioration = 0; //vout de l'amélioration
    this.etat = 4; // etat de l'objet il y en a 4 (bon/moyen/mauvais/casser)
    this.tmp_etat = 0; // temps avant que l'objet soit cassé
    this.tmp_reparation = 0; // temps avant la réparation fini
    if(value===1){
      this.cout = 30 + 
    }
    if(value===2){

    }
    if(value===3){

    }
}

module.exports = Objet;

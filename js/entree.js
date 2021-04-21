let entree = function (){
  let monObjet = new Lumiere(1);
  let monObjet2 = new Radiateur(2);
  monObjet.preview();
  monObjet2.preview();
  monObjet.etat = 2;
  monObjet.tmp_reparation = 5;
  monObjet.tmp_amelioration = 8;
  monObjet.update();
  monObjet.upgrade();
}

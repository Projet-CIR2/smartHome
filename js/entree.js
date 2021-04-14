let entree = function (){
  let monObjet = new Lumiere(1);
  let monObjet2 = new Radiateur(2);
  monObjet.preview();
  monObjet2.preview();
  monObjet.update();
  monObjet2.update();
}

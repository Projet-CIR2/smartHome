let infoObjet = [
  {
    nom: "frigo",
    niveau1: {
      description: "Frigo de niveau 1 équipé d'un freezer idéal pour commencer ",
      coutDebit: 25,
      prix: 750,
      tempsEtat: 90,
      bonheur: 3,

      coutReparation: 600,
      tempsReparation: 15,

      coutAmelioration: 1050,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Frigo de niveau 2 qui permet de combler le besoin nutritionnel",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 525,
      tempsReparation: 10,
      coutAmelioration: 1470,
      tempsAmelioration: 15

    },

    niveau3: {
      description: "Frigo de niveau 3 sublime l'humeur de ses utilisateurs",
      coutDebit: 31,
      bonheur: 9,
      tempsEtat: 150,
      coutReparation: 735,
      tempsReparation: 5
    }
  },

  {
    nom: "fauteuil",
    niveau1: {
      description: "Fauteuil de niveau 1 peu confortable ",
      coutDebit: 20,
      prix: 250,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 125,
      tempsReparation: 10,

      coutAmelioration: 300,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Fauteuil de niveau 2 ideal pour se reposer",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 150,
      tempsReparation: 7,
      coutAmelioration: 350,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Fauteuil de niveau 3 avec un confort irrésistible",
      coutDebit: 26,
      bonheur: 6,
      tempsEtat: 120,
      coutReparation: 175,
      tempsReparation: 4
    }
  },

  {
    nom: "gaziniere",
    niveau1: {
      description: "Gaziniere de niveau 1 modeste et fonctionnel ",
      coutDebit: 20,
      prix: 400,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 200,
      tempsReparation: 10,

      coutAmelioration: 560,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Gaziniere de niveau 2 équipé d'un four ideal pour les amateurs",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 280,
      tempsReparation: 7,
      coutAmelioration: 784,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Gaziniere de niveau 3 équipé d'un autocuiseur parfait pour toutes les envies",
      coutDebit: 26,
      bonheur: 6,
      tempsEtat: 120,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "radiateur",
    niveau1: {
      description: "Radiateur de niveau 1 chauffe mais avec difficultée ",
      coutDebit: 20,
      prix: 200,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 100,
      tempsReparation: 10,

      coutAmelioration: 380,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Radiateur de niveau 2 relier à un chauffage centrale qui ne cherche qu'a satisfaire vos besoins",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 190,
      tempsReparation: 7,
      coutAmelioration: 532,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Radiateur de niveau 3 équipé d'un thermostat automatique pour votre meilleur confort ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 266,
      tempsReparation: 4
    }
  },

  {
    nom: "lavelinge",
    niveau1: {
      description: "Lave linge de niveau 1 lave vos vêtements à faible température ",
      coutDebit: 20,
      prix: 400,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 200,
      tempsReparation: 10,

      coutAmelioration: 560,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Lave linge de niveau 2 équipé d'un sèche linge intégré",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 380,
      tempsReparation: 7,
      coutAmelioration: 784,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Lave linge de niveau 3 lave de façon délicate et précise ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "lavevaisselle",
    niveau1: {
      description: "Lave vaisselle de niveau 1 lave de façon superficiel ",
      coutDebit: 20,
      prix: 300,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 150,
      tempsReparation: 10,

      coutAmelioration: 420,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Lave vaisselle de niveau 2 dispose d'un nettoyage irréprochable",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 210,
      tempsReparation: 7,
      coutAmelioration: 588,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Lave vaisselle de niveau 3 ideal pour une vaisselle scintillante ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "tele",
    niveau1: {
      description: "Télévision de niveau 1 équipé d'un écran de basse qualité ",
      coutDebit: 25,
      prix: 600,
      tempsEtat: 90,
      bonheur: 3,

      coutReparation: 300,
      tempsReparation: 15,

      coutAmelioration: 840,
      tempsAmelioration: 30
    },

    niveau2: {
      description: "Télévision de niveau 2 dispose d'un écran de bonne qualité, capte les chaines via une antenne",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 420,
      tempsReparation: 10,
      coutAmelioration: 1116,
      tempsAmelioration: 25
    },

    niveau3: {
      description: "Télévision de niveau 3 possède un écran de haute qualité, capte les chaines via satellite",
      coutDebit: 31,
      tempsEtat: 150,
      bonheur: 9,
      coutReparation: 558,
      tempsReparation: 5
    }
  },

  {
    nom: "reveil",
    niveau1: {
      description: "Réveil de niveau 1 modeste mais efficace ",
      coutDebit: 10,
      prix: 50,
      tempsEtat: 30,
      bonheur: 1,

      coutReparation: 25,
      tempsReparation: 5,

      coutAmelioration: 95,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Réveil de niveau 2 dispose d'un antenne radio et peu enregistrer des musiques",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      coutReparation: 47,
      tempsReparation: 3,
      coutAmelioration: 132,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Réveil de niveau 3 ideal pour commencer une bonne journée ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      coutReparation: 66,
      tempsReparation: 1
    }
  },

  {
    nom: "boxinternet",
    niveau1: {
      description: "Box internet de niveau 1 qui fournie une connection suffisante mais instable ",
      coutDebit: 10,
      prix: 70,
      tempsEtat: 30,
      bonheur: 1,

      coutReparation: 35,
      tempsReparation: 5,

      coutAmelioration: 98,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Box internet de niveau 2 qui fournie bonne connection internet et fluide",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      coutReparation: 49,
      tempsReparation: 3,
      coutAmelioration: 137,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Box internet de niveau 3 permet une gestion autonome de la connection ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      coutReparation: 68,
      tempsReparation: 1
    }
  },

  {
    nom: "lumiere",
    niveau1: {
      description: "Lumiere de niveau 1 modeste mais efficace ",
      coutDebit: 10,
      prix: 50,
      tempsEtat: 30,
      bonheur: 1,

      coutReparation: 25,
      tempsReparation: 5,

      coutAmelioration: 95,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Lumiere de niveau 2 dispose d'un éclairage modulable ",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      coutReparation: 47,
      tempsReparation: 3,
      coutAmelioration: 132,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Lumière de niveau 3 possède un éclairage automatique ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      coutReparation: 66,
      tempsReparation: 1
    }
  },

  {
    nom: "ordinateur",
    niveau1: {
      description: "Ordinateur de niveau 1 équipé d'un écran de basse qualité ",
      coutDebit: 25,
      prix: 700,
      tempsEtat: 90,
      bonheur: 3,

      coutReparation: 350,
      tempsReparation: 15,

      coutAmelioration: 980,
      tempsAmelioration: 30
    },

    niveau2: {
      description: "Oridnateur de niveau 2 possède une bonne puissance de calcul et dispose d'un écran de bonne qualité",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 490,
      tempsReparation: 10,
      coutAmelioration: 1372,
      tempsAmelioration: 25
    },

    niveau3: {
      description: "Ordinateur de niveau 3 idéal pour les accros du net",
      coutDebit: 31,
      tempsEtat: 150,
      bonheur: 9,
      coutReparation: 686,
      tempsReparation: 5
    }
  },

  {
    nom: "robotaspirateur",
    niveau1: {
      description: "Robot aspirateur de niveau 1 nettoie avec une brosse le sol ",
      coutDebit: 20,
      prix: 200,
      tempsEtat: 60,
      bonheur: 2,

      coutReparation: 100,
      tempsReparation: 10,

      coutAmelioration: 380,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Robot aspirateur de niveau 2 aspire la poussière de façon silencieuse",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      coutReparation: 190,
      tempsReparation: 7,
      coutAmelioration: 532,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Robot aspirateur de niveau 3 aspire et lave le sol pour une surface éclatante ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      coutReparation: 266,
      tempsReparation: 4
    }
  }
]

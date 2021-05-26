let infoObjet = [
  {
    nom: "Frigo",
    niveau0:{
      description: "Frigo de niveau 1 équipé d'un freezer, idéal pour commencer ",
      bonheur: 3,
      environnement: -20,
      coutAmelioration:750

    },

    niveau1: {
      description: "Frigo de niveau 2 permetant d'avoir à manger pour 1 semaine",
      coutDebit: 25,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,

      coutReparation: 600,
      tempsReparation: 15,

      coutAmelioration: 1050,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Frigo de niveau 3, sublime l'humeur de ses utilisateurs",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 525,
      tempsReparation: 10,
      coutAmelioration: 1470,
      tempsAmelioration: 15

    },

    niveau3: {
      description: "Frigo de niveau max atteint",
      coutDebit: 31,
      bonheur: 9,
      environnement: 5,
      tempsEtat: 150,
      coutReparation: 735,
      tempsReparation: 5
    }
  },

  {
    nom: "Fauteuil",
    niveau0:{
      description: "Fauteuil de niveau 1, peu confortable ",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:250
    },

    niveau1: {
      description: "Fauteuil de niveau 2 idéal pour se reposer",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 125,
      tempsReparation: 10,

      coutAmelioration: 300,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Fauteuil de niveau 3 avec un confort irréprochable",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 150,
      tempsReparation: 7,
      coutAmelioration: 350,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Fauteuil de niveau max atteint",
      coutDebit: 26,
      bonheur: 6,
      environnement: 5,
      tempsEtat: 120,
      coutReparation: 175,
      tempsReparation: 4
    }
  },

  {
    nom: "Gazinière",
    niveau0:{
      description: "Gazinière de niveau 1, modeste et fonctionnelle ",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:400
    },

    niveau1: {
      description: "Gazinière de niveau 2 équipé d'un four idéal pour les amateurs",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 200,
      tempsReparation: 10,

      coutAmelioration: 560,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Gazinière de niveau 3 équipé d'un autocuiseur parfait pour toutes les envies",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 280,
      tempsReparation: 7,
      coutAmelioration: 784,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Gazinière de niveau max atteint",
      coutDebit: 26,
      bonheur: 6,
      environnement: 5,
      tempsEtat: 120,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "Radiateur",
    niveau0:{
      description: "Radiateur de niveau 1, chauffe mais avec difficulté ",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:200
    },

    niveau1: {
      description: "Radiateur de niveau 2 relié à un chauffage centrale qui ne cherche qu'à satisfaire vos besoins",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 100,
      tempsReparation: 10,

      coutAmelioration: 380,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Radiateur de niveau 3 équipé d'un thermostat automatique pour votre confort ",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 190,
      tempsReparation: 7,
      coutAmelioration: 532,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Radiateur de niveau max atteint",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 266,
      tempsReparation: 4
    }
  },

  {
    nom: "Lave_Linge",
    niveau0:{
      description: "Lave linge de niveau 1 lave vos vêtements à faible température ",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:400
    },

    niveau1: {
      description: "Lave linge de niveau 2 équipé d'un sèche linge intégré",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 200,
      tempsReparation: 10,

      coutAmelioration: 560,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Lave linge de niveau 3 lave de façon délicate et précise ",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 380,
      tempsReparation: 7,
      coutAmelioration: 784,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Lave linge de niveau max atteint",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "Lave_Vaisselle",
    niveau0:{
      description: "Lave vaisselle de niveau 1 lave de façon superficielle",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:300
    },

    niveau1: {
      description: "Lave vaisselle de niveau 2 dispose d'un nettoyage irréprochable",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 150,
      tempsReparation: 10,

      coutAmelioration: 420,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Lave vaisselle de niveau 3 idéal pour une vaisselle scintillante ",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 210,
      tempsReparation: 7,
      coutAmelioration: 588,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Lave vaisselle de niveau max atteint ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 392,
      tempsReparation: 4
    }
  },

  {
    nom: "Télé",
    niveau0:{
      description: "Télévision de niveau 1 équipé d'un écran de basse qualité ",
      bonheur: 3,
      environnement: -20,
      coutAmelioration:600
    },

    niveau1: {
      description: "Télévision de niveau 2 dispose d'un écran de bonne qualité, capte les chaines via une antenne",
      coutDebit: 25,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,

      coutReparation: 300,
      tempsReparation: 15,

      coutAmelioration: 840,
      tempsAmelioration: 30
    },

    niveau2: {
      description: "Télévision de niveau 3 possède un écran de haute qualité, capte les chaines via satellite",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 420,
      tempsReparation: 10,
      coutAmelioration: 1116,
      tempsAmelioration: 25
    },

    niveau3: {
      description: "Télévision de niveau max atteint",
      coutDebit: 31,
      tempsEtat: 150,
      bonheur: 9,
      environnement: 5,
      coutReparation: 558,
      tempsReparation: 5
    }
  },

  {
    nom: "Réveil",
    niveau0:{
      description: "Réveil de niveau 1 modeste mais efficace ",
      bonheur: 1,
      environnement: -20,
      coutAmelioration:50
    },

    niveau1: {
      description: "Réveil de niveau 2 dispose d'un antenne radio et peu enregistrer des musiques",
      coutDebit: 10,
      tempsEtat: 30,
      bonheur: 1,
      environnement: 5,

      coutReparation: 25,
      tempsReparation: 5,

      coutAmelioration: 95,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Réveil de niveau 3 ideal pour commencer une bonne journée ",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,
      coutReparation: 47,
      tempsReparation: 3,
      coutAmelioration: 132,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Réveil de niveau max atteint ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,
      coutReparation: 66,
      tempsReparation: 1
    }
  },

  {
    nom: "Box_Internet",
    niveau0:{
      description: "Box internet de niveau 1 qui fournie une connection suffisante mais instable ",
      bonheur: 1,
      environnement: -20,
      coutAmelioration:70
    },

    niveau1: {
      description: "Box internet de niveau 2 qui fournie bonne connection internet et fluide",
      coutDebit: 10,
      tempsEtat: 30,
      bonheur: 1,
      environnement: 5,

      coutReparation: 35,
      tempsReparation: 5,

      coutAmelioration: 98,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Box internet de niveau 3 permet une gestion autonome de la connection ",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,
      coutReparation: 49,
      tempsReparation: 3,
      coutAmelioration: 137,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Box internet de niveau max atteint ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,
      coutReparation: 68,
      tempsReparation: 1
    }
  },

  {
    nom: "Lumière",
    niveau0:{
      description: "Lumière de niveau 1 modeste mais efficace ",
      bonheur: 1,
      environnement: -20,
      coutAmelioration:50
    },

    niveau1: {
      description: "Lumiere de niveau 2 dispose d'un éclairage modulable ",
      coutDebit: 10,
      tempsEtat: 30,
      bonheur: 1,
      environnement: 5,

      coutReparation: 25,
      tempsReparation: 5,

      coutAmelioration: 95,
      tempsAmelioration: 10
    },

    niveau2: {
      description: "Lumière de niveau 3 possède un éclairage automatique ",
      coutDebit: 13,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,
      coutReparation: 47,
      tempsReparation: 3,
      coutAmelioration: 132,
      tempsAmelioration: 7
    },

    niveau3: {
      description: "Lumière de niveau max atteint ",
      coutDebit: 16,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,
      coutReparation: 66,
      tempsReparation: 1
    }
  },

  {
    nom: "Ordinateur",
    niveau0:{
      description: "Ordinateur de niveau 1 équipé d'un écran de basse qualité ",
      bonheur: 3,
      environnement: -20,
      coutAmelioration:700
    },

    niveau1: {
      description: "Ordinateur de niveau 2 possède une bonne puissance de calcul et dispose d'un écran de bonne qualité",
      coutDebit: 25,
      tempsEtat: 90,
      bonheur: 3,
      environnement: 5,

      coutReparation: 350,
      tempsReparation: 15,

      coutAmelioration: 980,
      tempsAmelioration: 30
    },

    niveau2: {
      description: "Ordinateur de niveau 3 idéal pour les vrais gamers",
      coutDebit: 28,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 490,
      tempsReparation: 10,
      coutAmelioration: 1372,
      tempsAmelioration: 25
    },

    niveau3: {
      description: "Ordinateur de niveau max atteint",
      coutDebit: 31,
      tempsEtat: 150,
      bonheur: 9,
      environnement: 5,
      coutReparation: 686,
      tempsReparation: 5
    }
  },

  {
    nom: "Robot_Aspirateur",
    niveau0:{
      description: "Robot aspirateur de niveau 1 nettoie le sol avec une brosse",
      bonheur: 2,
      environnement: -20,
      coutAmelioration:200
    },

    niveau1: {
      description: "Robot aspirateur de niveau 2 aspire la poussière de façon silencieuse",
      coutDebit: 20,
      tempsEtat: 60,
      bonheur: 2,
      environnement: 5,

      coutReparation: 100,
      tempsReparation: 10,

      coutAmelioration: 380,
      tempsAmelioration: 20
    },

    niveau2: {
      description: "Robot aspirateur de niveau 3 aspire et lave le sol pour une surface éclatante ",
      coutDebit: 23,
      tempsEtat: 90,
      bonheur: 4,
      environnement: 5,
      coutReparation: 190,
      tempsReparation: 7,
      coutAmelioration: 532,
      tempsAmelioration: 15
    },

    niveau3: {
      description: "Robot aspirateur de niveau max atteint ",
      coutDebit: 26,
      tempsEtat: 120,
      bonheur: 6,
      environnement: 5,
      coutReparation: 266,
      tempsReparation: 4
    }
  }
]

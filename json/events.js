let json = {

    Scenario: [
        {
            titre: "Le joueur",
            description_debut: "Vous voilà lancé pris la vie active et vous voulez pouvoir jouer à n'importe quel jeu en rentrant le soir chez vous",
            description_milieu:"Vous commencer vraiment a vous amuser grace a votre nouveau pc",
            description_fin:"Vous pouvez enfin jouer a tout vos jeux préfére en qualité max bravo!",
            difficulte:"difficile",
            argent: 100,
            debit: 100,
            humeur: 100,
            objectif: [
                {objet: "fauteuil", niveau: 3},
                {objet: "ordinateur", niveau: 3},
                {objet: "boxinternet", niveau: 3}
            ]
        },

        {
            titre: "Lève tard",
            description_debut: "Vous avez trouver un nouveau job mais vous avez du mal à vous levez le matin",
            description_milieu:"Vous pouvez maintenant dormir sans devoir tendre l'oreil pour entendre votre reveil",
            description_fin:"Votre sommeil est désormais parfais grace à l'aide des nouvelles technologies",
            difficulte:"facile",
            argent: 30,
            debit: 100,
            humeur: 60,
            objectif: [
                {objet: "fauteuil", niveau: 3},
                {objet: "reveil", niveau: 3},
                {objet: "lumiere", niveau: 3}
            ]
        },

        {
            titre: "Le cuisinier",
            description_debut: "Vous avez hériter d'une grosse somme d'argent et vous decider de vous lancer dans la vie de cuisinier professionnel",
            description_milieu:"Tous ce matèriel va vraiment vous permettre de vous améliorer pour atteindre votre but",
            description_fin:"bravo grace a tout vos investissement la victoire a Top Chef n'est plus très loin",
            difficulte:"difficile",
            argent: 150,
            debit: 100,
            humeur: 90,
            objectif: [
                {objet: "lavevaisselle", niveau: 3},
                {objet: "frigo", niveau: 3},
                {objet: "gaziniere", niveau: 3}
            ]
        },

        {
            titre: "Vie tranquille",
            description_debut: "Vous vous installer dans une nouvelle maison afin d'etre loin de la ville pour etre au calme et profiter à fond de votre salon",
            description_milieu:"Votre salon commence à resembler au salon de vos rêve",
            description_fin:"Vous pouvez enfin vous reposer dans votre salon toute la journée. C'est une réussite!",
            difficulte:"difficile",
            argent: 100,
            debit: 60,
            humeur: 70,
            objectif: [
                {objet: "fauteuil", niveau: 3},
                {objet: "radiateur", niveau: 3},
                {objet: "tele", niveau: 3}
            ]
        },

        {
            titre: "Repos avant tout",
            description_debut: "Vous etes au bout du rouleau et vous aimeriez pouvoir vous reposer un peu",
            description_milieu:"Vous commencer a vous sentir mieux dans cette maison",
            description_fin:"Vous etes de nouveaux en pleine forme avec tout ce que vous souhaitez",
            difficulte:"moyen",
            argent: 60,
            debit: 70,
            humeur: 70,
            objectif: [
                {objet: "lumière", niveau: 3},
                {objet: "fauteuil", niveau: 3},
                {objet: "radiateur", niveau: 3}
            ]
        },

        {
            titre: "Nouvelles technologies",
            description_debut: "Vous vous réveiller avec une vision clair : les nouvelles technologies sont l'avenir du monde",
            description_milieu:"votre objectif ce trouve à porter de mains désormais",
            description_fin:"Vous êtes maintenant à la pointe de la technologie",
            difficulte:"facile",
            argent: 150,
            debit: 100,
            humeur: 90,
            objectif: [
                {objet: "lumiere", niveau: 3},
                {objet: "robotaspirateur", niveau: 3},
                {objet: "boxinternet", niveau: 3}
            ]
        },

        {
            titre: "Tout est propre",
            description_debut: "Vous décidez de vous reprendre en mains et de tout nettoyer dans votre maison",
            description_milieu:"Votre environnement devient de plus en plus propre",
            description_fin:"Votre maison est maintenant propre du sol au plafond bravo!",
            difficulte:"moyen",
            argent: 150,
            debit: 100,
            humeur: 90,
            objectif: [
                {objet: "lavelinge", niveau: 3},
                {objet: "lavevaisselle", niveau: 3},
                {objet: "robotaspirateur", niveau: 3}
            ]
        }
    ],




    ameliorations: {
        camera: [
            "amélioration nv2",
            "amélioration nv3",
            "amélioration nv4",
            "amélioration nv5"
        ],

        ordi: [
            "amélioration nv2",
            "amélioration nv3",
            "amélioration nv4",
            "amélioration nv5"
        ],

        objet: [
            "amélioration nv2",
            "amélioration nv3",
            "amélioration nv4",
            "amélioration nv5"
        ],


    },


    argent: [
        "vous n'avez pas assez de fond pour cette améliorations",
        "Vous voulez gagné de l'argent?",
        "Cette somme est énorme!"
    ],


    events: [
        "Alerte attentat dans le centre ville",
        "Le monde en pleure après la mort de Johnny Hallyday",
        "Le tour de france passerat par Sarlat cette année",
        "C'est l'équipe de france qui as gagné la coupe du monde de foot en 2018",
        "Les serveur d'OVH réduit en cendre",
        "Le covid fais toujours plus de victimes",
        "réouverture des bars dans la france",
        "Cet été s'annonce chaud",
        "Ce job me va parfaitement",
        "Il me manque quelque chose",
        "Je suis fatigué",
        "J'ai envie de manger des pâtes",
        "Il fais chaud aujourd'hui",
        "J'ai envie de boire",
        "J'ai besoin de me changer les idées",
        "On est bien ici",
        "Pour les vacances partez à la plage",
        "",
        "",
        ""
    ],


    evenements_important: {
        positif: [
            {description: "Vous trouver de l'argent", argent: 5, debit: 0, humeur: 0},
            {description: "Votre débit fonctionne particulièrement bien", argent: 0, debit: 5, humeur: 0},
            {description: "Erreur de la banque en votre faveur", argent: 20, debit: 0, humeur: 0},
            {description: "Vous avez gagnez le premier prix de beauter", argent: 5, debit: 0, humeur: 5},
            {description: "C'est votre anniversaire vous recevez de l'argent", argent: 10, debit: 0, humeur: 0},
            {description: "Votre nouvelle entreprise obtient un gros bénéfice", argent: 15, debit: 0, humeur: 0},
            {description: "Le débit de votre maison est très bon aujourd'huidd", argent: 0, debit: 5, humeur: 0},
            {description: "gain de débit", argent: 0, debit: 5, humeur: 0},
            {description: "gain de débit", argent: 0, debit: 5, humeur: 0},
            {description: "gain de débit", argent: 0, debit: 5, humeur: 0},
            {description: "gain de débit", argent: 0, debit: 5, humeur: 0}
        ],

        negatif: [
            {description: "Vous avez perdu votre argent durant votre balade", argent: -5, debit: 0, humeur: 0},
            {description: "Votre fournisseur internet a des problemes", argent: 0, debit: -15, humeur: 0},
            {description: "La banque est en faillite!", argent: -20, debit: 0, humeur: 0},
            {description: "Votre jardin a été sacagé par un chien", argent: 0, debit: 0, humeur: -5},
            {description: "Votre box internet a des problemes", argent: 0, debit: -10, humeur: 0},
            {description: "Vous devez payer des intérêts", argent: -10, debit: 0, humeur: 0},
            {description: "Votre investisement n'as pas porté ses fruits", argent: -20, debit: 0, humeur: 0},
            {description: "perte de débit", argent: 0, debit: -5, humeur: 0},
            {description: "perte de débit", argent: 0, debit: -5, humeur: 0},
            {description: "perte de débit", argent: 0, debit: -5, humeur: 0},
            {description: "perte de débit", argent: 0, debit: -5, humeur: 0}
        ]
    },
}
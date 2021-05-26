let json = {

    Scenario: [
        {
            titre: "Nouvelles technologies",
            description_debut: "Vous vous réveiller avec une vision clair : les nouvelles technologies sont l'avenir du monde",
            description_milieu:"votre objectif ce trouve à porter de mains désormais",
            description_fin:"Vous êtes maintenant à la pointe de la technologie",
            difficulte:"Facile",
            argent: 15000,
            debit: 100,
            humeur: 90,
            objet1: "Lumière",
            objet2: "Robot_Aspirateur", 
            objet3: "Box_Internet",
            habitants: 3,
            map: 0,
        },
        {
            titre: "Lève tard",
            description_debut: "Vous avez trouver un nouveau job mais vous avez du mal à vous levez le matin",
            description_milieu:"Vous pouvez maintenant dormir sans devoir tendre l'oreil pour entendre votre reveil",
            description_fin:"Votre sommeil est désormais parfais grace à l'aide des nouvelles technologies",
            difficulte:"Facile",
            argent: 400,
            debit: 100,
            humeur: 60,
            objet1: "Fauteuil",
            objet2: "Réveil", 
            objet3: "Lumière",
            habitants: 1,
            map: 1,
        },
        {
            titre: "Repos avant tout",
            description_debut: "Vous etes au bout du rouleau et vous aimeriez pouvoir vous reposer un peu",
            description_milieu:"Vous commencer a vous sentir mieux dans cette maison",
            description_fin:"Vous etes de nouveaux en pleine forme avec tout ce que vous souhaitez",
            difficulte:"Normal",
            argent: 300,
            debit: 70,
            humeur: 70,
            objet1: "Lumière",
            objet2: "Fauteuil", 
            objet3: "Radiateur",
            habitants: 2,
            map: 1,
        },

        

        {
            titre: "Tout est propre",
            description_debut: "Vous décidez de vous reprendre en mains et de tout nettoyer dans votre maison",
            description_milieu:"Votre environnement devient de plus en plus propre",
            description_fin:"Votre maison est maintenant propre du sol au plafond bravo!",
            difficulte:"Normal",
            argent: 350,
            debit: 100,
            humeur: 90,
            objet1: "Lave_Linge",
            objet2: "Lave_Vaisselle", 
            objet3: "Robot_Aspirateur",
            habitants: 3,
            map: 0,
        },
        {
            titre: "Le joueur",
            description_debut: "Vous voilà lancé pris la vie active et vous voulez pouvoir jouer à n'importe quel jeu en rentrant le soir chez vous",
            description_milieu:"Vous commencer vraiment a vous amuser grace a votre nouveau pc",
            description_fin:"Vous pouvez enfin jouer a tout vos jeux préfére en qualité max bravo!",
            difficulte:"Difficile",
            argent: 150,
            debit: 100,
            humeur: 100,
            objet1: "Fauteuil",
            objet2: "Ordinateur", 
            objet3: "Box_Internet",
            habitants: 1,
            map: 1,
            
        },
        {
            titre: "Le cuisinier",
            description_debut: "Vous avez hériter d'une grosse somme d'argent et vous decider de vous lancer dans la vie de cuisinier professionnel",
            description_milieu:"Tous ce matèriel va vraiment vous permettre de vous améliorer pour atteindre votre but",
            description_fin:"bravo grace a tout vos investissement la victoire a Top Chef n'est plus très loin",
            difficulte:"Difficile",
            argent: 150,
            debit: 100,
            humeur: 90,
            objet1: "Lave_Vaisselle",
            objet2: "Frigo", 
            objet3: "Gazinière",
            habitants: 2,
            map: 0,
        },
        {
            titre: "Vie tranquille",
            description_debut: "Vous vous installer dans une nouvelle maison afin d'etre loin de la ville pour etre au calme et profiter à fond de votre salon",
            description_milieu:"Votre salon commence à resembler au salon de vos rêve",
            description_fin:"Vous pouvez enfin vous reposer dans votre salon toute la journée. C'est une réussite!",
            difficulte:"Difficile",
            argent: 200,
            debit: 60,
            humeur: 70,
            objet1: "Fauteuil",
            objet2: "Radiateur", 
            objet3: "Télé",
            habitants: 2,
            map: 0,
        },
    ],


    argent: [
        "vous n'avez pas assez de fond pour cette améliorations",
        "Vous voulez gagné de l'argent?",
        "Cette somme est énorme!"
    ],


    events: [
        "Il faut que j'aille travailler",
        "Le monde en pleure après la mort de Johnny Hallyday",
        "Le tour de france passerat par Brest cette année",
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
        "Le président va bientot faire un discour",
        "Ma maison est vraiment belle",
        "Le temps est vraiment magnifique",
        "J'ai besoin de me reposer",
        "Les plantes sont vraiment magnifique",
        "Une balade au parc me ferais du bien",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],


    evenements_important: {
        positif: [
            {description: "Vous trouver de l'argent", argent: 5, debit: 0, humeur: 0, environnement: 0},
            {description: "Votre débit fonctionne particulièrement bien", argent: 0, debit: 5, humeur: 0, environnement: 0},
            {description: "Erreur de la banque en votre faveur", argent: 20, debit: 0, humeur: 0, environnement: 0},
            {description: "Vous avez gagnez le premier prix de beauter", argent: 10, debit: 0, humeur: 5, environnement: 0},
            {description: "C'est votre anniversaire vous recevez de l'argent", argent: 15, debit: 0, humeur: 0, environnement: 0},
            {description: "Votre nouvelle entreprise obtient un gros bénéfice", argent: 25, debit: 0, humeur: 0, environnement: 0},
            {description: "Le débit de votre maison est très bon aujourd'huid", argent: 0, debit: 5, humeur: 0, environnement: 0},
            {description: "La ville veut ouvrir un parc près de chez vous", argent: 0, debit: 0, humeur: 0, environnement: 10},
            {description: "Les zones vertes près de chez vous on été rénover", argent: 0, debit: 0, humeur: 0, environnement: 15},
            {description: "Votre famille vous rend visite à l'improviste", argent: 0, debit: 0, humeur: 10, environnement: 0},
            {description: "Vous obtenez une offre de votre fournisseur internet", argent: 0, debit: 15, humeur: 0, environnement: 0},
            {description: "Votre femme est enceinte", argent: 0, debit: 0, humeur: 30, environnement: 0},
            {description: "Héritage de la grand-mère", argent: 40, debit: 0, humeur: 0, environnement: 0},
            {description: "Déploiment de la 5G", argent: 0, debit: 20, humeur: 0, environnement: 0},
            {description: "Réduction d'impot", argent: 20, debit: 0, humeur: 20, environnement: 0},
            {description: "Vous commencé a trier vos dechets", argent: 0, debit: 15, humeur: 0, environnement: 20},
            {description: "Interet du livret A", argent: 10, debit: 0, humeur: 0, environnement: 0},
            {description: "Nouvelle Box livret", argent: 0, debit: 15, humeur: 0, environnement: 0},
            {description: "Votre arbre pousse bien", argent: 0, debit: 0, humeur: 15, environnement: 10},
            {description: "Le voisin vous invite a sa fête", argent: 0, debit: 0, humeur: 10, environnement: 0}
        ],

        negatif: [
            {description: "Vous avez perdu votre argent durant votre balade", argent: -5, debit: 0, humeur: 0, environnement: 0},
            {description: "Votre fournisseur internet a des problemes", argent: 0, debit: -15, humeur: 0, environnement: 0},
            {description: "La banque est en faillite!", argent: -20, debit: 0, humeur: 0, environnement: 0},
            {description: "Un chien a fais ses besoins dans mon jardin", argent: 0, debit: 0, humeur: -5, environnement: 0},
            {description: "Votre box internet a des problemes", argent: 0, debit: -10, humeur: 0, environnement: 0},
            {description: "Vous devez payer des intérêts", argent: -10, debit: 0, humeur: 0, environnement: 0},
            {description: "Votre investisement n'as pas porté ses fruits", argent: -20, debit: 0, humeur: 0, environnement: 0},
            {description: "Des enfants on saccager votre jardin", argent: 0, debit: 0, humeur: 0, environnement: -10},
            {description: "La ville veut construire un nouveau batiment à la place de ce parc", argent: 0, debit: 0, humeur: 0, environnement: -15},
            {description: "Votre maison a été endomagé par la tempete", argent: 0, debit: 0, humeur: -10, environnement: 0},
            {description: "Vos nouveaux voisin ne vous laisse pas vivre tranquillement", argent: 0, debit: 0, humeur: -10, environnement: 0},
            {description: "Votre chien a uriné sur votre box internet", argent: 0, debit: -20, humeur: -10, environnement: 0},
            {description: "Panne Electricité", argent: 0, debit: -30, humeur: -20, environnement: 0},
            {description: "Votre belle-mère passe a l'improviste", argent: 0, debit: 0, humeur: -15, environnement: 0},
            {description: "Le cours du Bitcoin s'effondre", argent: -20, debit: 0, humeur: 0, environnement: 0},
            {description: "Remboursement prêt immobilier", argent: -25, debit: 0, humeur: -10, environnement: 0},
            {description: "L'installateur coupe votre raccordement fibre par erreur", argent: 0, debit: -30, humeur: -10, environnement: 0},
            {description: "Un cheval de troie infiltre votre résaux", argent: 0, debit: -20, humeur: -10, environnement: 0},
            {description: "Vos données bancaires ont été piratée", argent: -20, debit: -20, humeur: -10, environnement: 0},
            {description: "Fuite d'eau dans la cuisine", argent: 0, debit: 0, humeur: -10, environnement: -20}
        ]
    },
}
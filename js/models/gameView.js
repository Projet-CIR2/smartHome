class GameView {
    constructor(elmt) {
        this.humeur = elmt.humeur; // en %
        this.argent = Number(elmt.argent); // en €
        this.debit = elmt.debit; // en %
        this.environnement = 100; // en %
        if(elmt.difficulte == 'Facile') {
            this.difficulte = 1;
        }
        if(elmt.difficulte == 'Normal') {
            this.difficulte = 2;
        }
        if(elmt.difficulte == 'Difficile') {
            this.difficulte = 3;
        }
        this.objet = [];

        this.barreHumeur = new Barres('humeur');
        this.barreArgent = new Barres('argent');
        this.barreDebit = new Barres('debit');
        this.barreEnvironnement = new Barres('environnement');
        this.modifBarre();

        this.initEvents();
    }

    initEvents() {
        chat.lanceTexte();

        achat.verif('MaJ');
        achat.clickStop();

        document.getElementById('MaJ').addEventListener('click', () => {
            achat.verif('MaJ');
        });

        document.getElementById('Upgrade').addEventListener('click', () => {
            achat.verif('Upgrade');
        });
    }

    modifBarre() {
        this.barreHumeur.modifBarre(this.humeur);
        this.barreArgent.modifBarre(this.argent);
        this.barreDebit.modifBarre(this.debit);
        this.barreEnvironnement.modifBarre(this.environnement);
    }

    logVar() {
        console.log('humeur', this.humeur);
        console.log('argent', this.argent);
        console.log('debit', this.debit);
        console.log('environnement', this.environnement);
    }

    getArgentPlayer() {
        return this.argent;
    }

    paiement(infosNiveau) {
        this.argent -= infosNiveau.coutAmelioration;
        this.environnement += infosNiveau.environnement;
        this.humeur += infosNiveau.bonheur;
        this.modifBarre();
    }
}

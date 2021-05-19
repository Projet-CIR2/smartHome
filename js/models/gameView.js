class GameView {
    constructor() {
        this.humeur = 100; // en %
        this.argent = 10; // en €
        this.debit = 100; // en %
        this.difficulte = 0; // 1, 2, ou 3

        this.barreHumeur = new Barres('humeur');
        this.barreArgent = new Barres('argent');
        this.barreDebit = new Barres('debit');
        this.modifBarre();

        this.initEvents();
    }

    initEvents() {
        chat.lanceTexte();

        achat.verif('MaJ');
        achat.clickStop();

        document.getElementById('MaJ').addEventListener('click', () => {
            achat.verif('MaJ');
            achat.recupDataMaj();
        });

        document.getElementById('Upgrade').addEventListener('click', () => {
            achat.verif('Upgrade');
            achat.recupData();
        });
    }

    modifBarre() {
        this.barreHumeur.modifBarre(this.humeur);
        this.barreArgent.modifBarre(this.argent);
        this.barreDebit.modifBarre(this.debit);
    }

    logVar() {
        console.log('humeur', this.humeur);
        console.log('argent', this.argent);
        console.log('debit', this.debit);
    }
}
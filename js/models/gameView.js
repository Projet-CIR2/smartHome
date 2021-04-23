class GameView {
    constructor() {
        this.humeur = 100; // en %
        this.argent = 10; // en €
        this.debit = 100; // en %

        this.barreHumeur = new Barres('humeur');
        this.barreArgent = new Barres('argent');
        this.barreDebit = new Barres('debit');
        this.modifBarre();

        chat.lanceTexte();
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
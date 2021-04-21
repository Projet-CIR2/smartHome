class GameView {
    constructor() {
        this.humeur = 100; // en %
        this.argent = 0; // en €
        this.debit = 100; // en %

        this.barreHumeur = new Barres('humeur');
        this.barreArgent = new Barres('argent');
        this.barreDebit = new Barres('debit');

        chat.lanceTexte();
    }
}
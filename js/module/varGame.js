let VarGame = (function () {
    let view;

    return {
        initView(view_, difficulty) {
            view = view_;

            view.difficulte = difficulty;

            // ajout des valeurs toutes les 30 secondes
            setInterval(() => {
                this.modifVar('humeur', -2);
            }, 20000);
            setInterval(() => {
                this.modifVar('argent', 0.25 * view.humeur);
            }, 20000);
            // paiement de la box
            setInterval(() => {
                this.modifVar('argent', -20 * view.difficulte);
            }, 200000);
        },

        // modifie la variable de jeu du type de nb
        modifVar(type, nb) {
            if (type === 'humeur' && view + nb >= 0 && view + nb <= 100) view.humeur += nb * view.difficulte;
            if (type === 'argent') view.argent += nb;
            if (type === 'debit' && view.debit + nb >= 0 && view.debit + nb <= 100) view.debit += nb / view.difficulte;

            view.modifBarre();
            // view.logVar();
        }
    }
}) ();
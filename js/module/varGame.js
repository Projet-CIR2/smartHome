let VarGame = (function () {
    let view;

    return {
        initView(view_) {
            view = view_;

            // ajout des valeurs toutes les 30 secondes
            setInterval(() => {
                this.modifVar('humeur', -2);
            }, 30000);
            setInterval(() => {
                this.modifVar('argent', 0.15 * view.humeur);
            }, 30000);
            setInterval(() => {
                this.modifVar('argent', -20);
            }, 300000);
        },

        // modifie la variable de jeu du type de nb
        modifVar(type, nb) {
            if (type === 'humeur' && view + nb >= 0 && view + nb <= 100) view.humeur += nb;
            if (type === 'argent') view.argent += nb;
            if (type === 'debit' && view + nb >= 0 && view + nb <= 100) view.debit += nb;
            view.modifBarre();
            // view.logVar();
        }
    }
}) ();
let VarGame = (function () {
    let view;

    return {
        initView(view_, difficulty) {
            view = view_;

            view.difficulte = difficulty;

            // ajout des valeurs toutes les 30 secondes
            setInterval(() => {
                this.modifVar('humeur', -2 * view.difficulte);
            }, 30000);
            setInterval(() => {
                this.modifVar('argent', 0.15 * view.humeur);
            }, 30000);
            // paiement de la box
            setInterval(() => {
                this.modifVar('argent', -20 * view.difficulte);
            }, 300000);

            document.getElementById('MaJ').addEventListener('click', () => {
                achat.recupDataMaj();
            });

            document.getElementById('Upgrade').addEventListener('click', () => {
                achat.recupData();
            });
        },

        // modifie la variable de jeu du type de nb
        modifVar(type, nb) {
            ///////////////////////// à modifier
            if (type === 'humeur' && view + nb >= 0 && view + nb <= 100) view.humeur += nb / view.difficulte;
            if (type === 'argent') view.argent += nb / view.difficulte;
            if (type === 'debit' && view.debit + nb >= 0 && view.debit + nb <= 100) view.debit += nb / view.difficulte;

            view.modifBarre();
            // view.logVar();
        }
    }
}) ();
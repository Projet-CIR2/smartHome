let VarGame = (function () {
    let view;

    return {
        initView(view_, difficulty) {
            view = view_;

            view.difficulte = difficulty;

            // ajout des valeurs toutes les 30 secondes
            setInterval(() => {
                view.modifVar('humeur', -2 * view.difficulte);
            }, 30000);
            setInterval(() => {
                view.modifVar('argent', 2 * view.humeur);
            }, 30000);
            // paiement de la box
            setInterval(() => {
                view.modifVar('argent', -20 * view.difficulte);
            }, 300000);
            setInterval(() => {
                view.argentBonheur();
            }, 300000);
        },
    }
}) ();

let scenarIndexerMenu = (function () {
    function post(scenar) {
        let titre = scenar.titre;
        let description_debut = scenar.description_debut;
        let description_milieu = scenar.description_milieu;
        let description_fin = scenar.description_fin;
        let difficulte = scenar.difficulte;
        let argent = scenar.argent;
        let debit = scenar.debit;
        let humeur = scenar.humeur;
        let obj1 = scenar.objet1;
        let obj2 = scenar.objet2;
        let obj3 = scenar.objet3;
        $.ajax({
            type:"POST",
            url: "/",
            data: {
                elmtTitre : titre,
               elmtdescription_debut : description_debut,
               elmtdescription_milieu : description_milieu,
               elmtdescription_fin : description_fin,
               elmtdifficulte : difficulte,
               elmtargent : argent,
               elmtdebit : debit,
               elmthumeur : humeur,
               elmtObj1 : obj1,
               elmtObj2 : obj2,
               elmtObj3 : obj3,
            },
            success: () => {
                window.location.href = "/jouer";
            },
        });
    }
    return {
        send(scenar) {
            post(scenar);
            console.log(scenar);
        }
    }
})();
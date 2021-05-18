let achat = (function() {
    let data = upgradeJSON;
    let dataMaj = majJSON;
    let dataMajDesc = majJSON.lores;
   
    

    return {
        recupData() {
            let val = 0;

            for (let element of data) {
                createObjetMaj('d_Upgrade', element.events, '', 'Acheter');

                val++;
            }
           
        },

        recupDataMaj() {
            let val = 0;

            for (let element of dataMaj) {
                createObjetMaj('d_MaJ', element.events, element.lore, 'Mettre à jour');

                val++;
            }
        },

        achat() {
            this.recupData(),
            this.recupDataMaj()
        },

        popUpgrade(nb) {
            data.splice(nb, 1);
        },

        popMaj(nb) {
            dataMaj.splice(nb, 1);
        },

        addMaj(title) {
            let indice = data.findIndex(element => element.events === title);
            if (indice !== -1) {
                dataMaj.push(data[indice]);
                this.popUpgrade(indice);
            }
        }
    }
})();


let achat = (function() {
    let data = upgradeJSON.events;
    let dataMaj = majJSON.events;
    let dataMajDesc = majJSON.lores;
   
    

    return {
        recupData() {
            let val, title, div, p, button;
            val = 0;
    
            data.forEach(element => {
                createObjetMaj('d_Upgrade', element, '', 'Acheter', val);
    
                val++;
            });
           
        },

        recupDataMaj() {
            let val, div, p, button, desc;
            val = 0;
            dataMaj.forEach(element => {
                createObjetMaj('d_Upgrade', element, '', 'Mettre à jour', val);
    
                val++;
            });
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

        addMaj(nb) {
            dataMaj.push(data[nb]);
            this.popUpgrade(nb);
        }

    }
})();


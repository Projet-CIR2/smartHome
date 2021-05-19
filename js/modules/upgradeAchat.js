let achat = (function() {
    let data = upgradeJSON;
    let dataMaj = majJSON;

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
        },

        verif(mOru) {
            let p, div;
            
            if(data.length == 0 && mOru == 'Upgrade') {
                p = document.createElement('p');
                p.textContent = "Vous avez tout acheté";
                p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                div = document.getElementById('d_Upgrade');
                div.appendChild(p);
            }
            if(dataMaj.length == 0 && mOru == 'MaJ') {
                p = document.createElement('p');
                p.textContent = "Vous n'avez pas d'objet";
                p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                div = document.getElementById('d_MaJ');
                div.appendChild(p);
            }
        },
        clickStop() {
            let div = document.getElementById('achat');
            div.addEventListener('click', () => {
                div.setAttribute('style', 'display: none;');
            });
        }
    }
})();


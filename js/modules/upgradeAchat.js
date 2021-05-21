let achat = (function() {
    let dataMaj = [];

    return {
        recupData() {
            for (let element of stockageObj) {
                createObjetMaj('d_Upgrade', element.nom, element.infosNiveau.description +
                    ((element.niveau !== 3) ? "<br><br>Prix : " + element.infosNiveau.coutAmelioration + "€" : "<br><br>Niveau Max"),
                    'Acheter', element);
            }
        },

        recupDataMaj() {
            for (let element of dataMaj) {
                createObjetMaj('d_MaJ', element.nom,
                    "Prix Maj : " + element.infosNiveau.coutReparation + "€" +
                    "<br><br>Temps de MaJ : " + element.infosNiveau.tempsAmelioration + "s" +
                    "<br><br>Cout débit : " + element.infosNiveau.coutDebit,
                    'Mettre à jour', element);
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
            let indice = stockageObj.findIndex(element => element.nom === title);
            if (indice !== -1) {
                dataMaj.push(stockageObj[indice]);
                // this.popUpgrade(indice);
            }
        },

        addUpgrade(title) {
            let indice = data.findIndex(element => element.nom === title);
            if (indice !== -1) {
                dataMaj.unshift(dataMaj[indice]);
                this.popMaj(indice);
            }
        },

        verif(mOru, polygone) {
            let p, div;

            if (mOru === 'Upgrade') {
                if (!stockageVar.click) {
                    p = document.createElement('p');
                    p.textContent = "Cliquez sur une case pour ajouter un objet";
                    p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                    div = document.getElementById('d_Upgrade');
                    div.appendChild(p);
                } else {
                    if ((polygone !== undefined && polygone.objet === undefined) || polygone === undefined) this.recupData();
                    else {
                        p = document.createElement('p');
                        p.textContent = "Vous avez déjà placé un objet";
                        p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                        div = document.getElementById('d_Upgrade');
                        div.appendChild(p);
                    }
                }
            } else if (dataMaj.length === 0 && mOru === 'MaJ') {
                p = document.createElement('p');
                p.textContent = "Vous n'avez pas d'objet";
                p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                div = document.getElementById('d_MaJ');
                div.appendChild(p);
            }
            else {
                if (document.getElementById('d_MaJ') !== null) {
                    scriptMagique.clean();
                    scriptMagique.clickMaj();
                    this.recupDataMaj();
                }
            }
        },
        clickStop() {
            let div = document.getElementById('achat');
            div.addEventListener('click', () => {
                div.innerHTML = "";
                div.setAttribute('style', 'display: none;')
            });
        }
    }
})();


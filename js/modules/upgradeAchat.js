let achat = (function () {
    let dataMaj = [];
    let dataInter = [];

    return {
        recupData() {
            for (let element of stockageObj) {
                createObjetMaj('d_Upgrade', element.nom, "Amélioration suivante : " + element.infosNiveau.description + "<br><br>" +
                    ((element.niveau !== 3) ? "Prix : " + element.infosNiveau.coutAmelioration + "€" : "Vous etes arrivé au niveau maximum !"),
                    ((element.niveau !== 3) ? ((element.niveau === 0) ? 'Acheter' : 'Améliorer') : 'Niveau Max'), element);
            }
        },

        recupDataMaj() {
            for (let element of dataMaj) {
                createObjetMaj('d_MaJ', element.nom,
                    "Prix Maj : " + element.infosNiveau.coutReparation + "€" +
                    "<br><br>Temps de MaJ : " + element.infosNiveau.tempsReparation + "s" +
                    "<br><br>Cout débit : " + element.infosNiveau.coutDebit,
                    'Mettre à jour', element);
            }
        },

        cleanMaj() {
            dataMaj = [];
            this.baisseEtat();
        },

        baisseEtat() {
            for (let element of dataInter) {
                if (element.etat !== 3) {
                    if (dataMaj.findIndex(elmt => elmt.nom === element.nom) === -1) {
                        dataMaj.push(element);
                    }
                }
            }
            scriptMagique.eventMaj();
        },

        suppMaj(title) {
            let ind = dataMaj.findIndex(elmt => elmt.nom === title);
            dataMaj.splice(ind, 1);
        },

        achat() {
            this.recupData();
            this.recupDataMaj();
        },

        popUpgrade(nb) {
            data.splice(nb, 1);
        },

        popMaj(nb) {
            dataMaj.splice(nb, 1);
        },

        addMaj() {

        },

        addInter(title) {
            let indice = stockageObj.findIndex(element => element.nom === title);
            let verif = false;
            let tab = this.getInter();

            if (tab.length !== 0)
                for (let i = 0; i < tab.length; i++)
                    if (stockageObj[indice].nom === tab[i].nom)
                        verif = true;


            if (indice !== -1 && verif === false) {
                this.setInter(stockageObj[indice]);
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
            } else {
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
        },
        getInter() {
            return dataInter;
        },
        setInter(val) {
            dataInter.push(val);
        },
    }
})();

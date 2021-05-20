let achat = (function() {
    let data = infoObjet;
    let dataMaj = majJSON;

    return {
        recupData() {
            for (let element of data) {
                createObjetMaj('d_Upgrade', element.nom, element.niveau1.description + "<br><br>Prix : " + element.niveau1.prix + "€", 'Acheter', element);
            }

        },

        recupDataMaj() {
            for (let element of dataMaj) {
                createObjetMaj('d_MaJ', element.nom, element.niveau1.description + "<br><br>Prix Niveau 2: " + element.niveau1.coutAmelioration + "€" + "<br><br>Temps de MaJ : " + element.niveau1.tempsAmelioration + "s", 'Mettre à jour', element);
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
            let indice = data.findIndex(element => element.nom === title);
            if (indice !== -1) {
                dataMaj.push(data[indice]);
                this.popUpgrade(indice);
            }
        },

        verif(mOru, polygone) {
            let p, div;

            if (data.length !== 0 && mOru === 'Upgrade') {
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
            } else if (data.length === 0 && mOru === 'Upgrade') {
                p = document.createElement('p');
                p.textContent = "Vous avez tout acheté";
                p.setAttribute('style', 'color: white; text-align: center; margin-top: 80%;');
                div = document.getElementById('d_Upgrade');
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


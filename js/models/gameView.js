class GameView {
    constructor(elmt) {
        this.scenario = elmt;
        this.humeur = Number(elmt.humeur); // en %
        this.argent = Number(elmt.argent); // en €
        this.debit = Number(elmt.debit); // en %
        this.environnement = 100; // en %
        if (elmt.difficulte === 'Facile') {
            this.difficulte = 1;
        }
        if (elmt.difficulte === 'Normal') {
            this.difficulte = 2;
        }
        if (elmt.difficulte === 'Difficile') {
            this.difficulte = 3;
        }
        this.objet = [];

        this.barreHumeur = new Barres('humeur');
        this.barreArgent = new Barres('argent');
        this.barreDebit = new Barres('debit');
        this.barreEnvironnement = new Barres('environnement');
        this.modifBarre();

        this.initEvents();

        this.verif = false;
        this.verif1 = 0;
        this.verif2 = 0;
        this.verif3 = 0;
    }

    initEvents() {
        chat.lanceTexte();

        achat.verif('MaJ');
        achat.clickStop();

        document.getElementById('MaJ').addEventListener('click', () => {
            achat.verif('MaJ');
        });

        document.getElementById('Upgrade').addEventListener('click', () => {
            achat.verif('Upgrade');
        });

        let secondes = 0, minutes = 0, heures = 0;
        let currentP = document.getElementById('compteur');

        setInterval(() => {
            let text = "";
            secondes++;
            if (secondes >= 60) {
                secondes = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                heures++;
            }

            if (heures < 10) text += "0" + heures;
            else text += heures;
            text += ":";
            if (minutes < 10) text += "0" + minutes;
            else text += minutes;
            text += ":";
            if (secondes < 10) text += "0" + secondes;
            else text += secondes;

            currentP.textContent = text;
        }, 1000);
    }

    modifBarre() {
        this.barreHumeur.modifBarre(this.humeur);
        this.barreArgent.modifBarre(this.argent);
        this.barreDebit.modifBarre(this.debit);
        this.barreEnvironnement.modifBarre(this.environnement);
    }

    // modifie la variable de jeu du type de nb
    modifVar(type, nb) {
        if (type === 'humeur') {
            if (this.humeur + (nb / this.difficulte) <= 100) this.humeur += nb / this.difficulte;
            else this.humeur = 100;
        }
        if (type === 'argent') this.argent += nb;
        if (type === 'environnement') {
            if (this.environnement + nb <= 100) this.environnement += nb;
            else this.environnement = 100;
        }
        if (type === 'debit' && this.debit + nb >= 0) {
            if (this.debit + (nb / this.difficulte) <= 100) this.debit += nb / this.difficulte;
            else this.debit = 100;
        }

        if (this.environnement <= 0) this.environnement = 0;
        if (this.humeur <= 0) this.humeur = 0;

        this.modifBarre();
    }

    argentBonheur() {
        let z = this.argent
        if (z <= 0) {
            let x = z - 50;
            this.bonheur += Math.sqrt(x) * this.difficulte;
        }
        // this.logVar();
    }

    logVar() {
        console.log('humeur', this.humeur);
        console.log('argent', this.argent);
        console.log('debit', this.debit);
        console.log('environnement', this.environnement);
    }

    getArgentPlayer() {
        return this.argent;
    }

    paiement(infosNiveau) {
        this.modifVar('argent', -1 * infosNiveau.coutAmelioration);
        this.environnement += infosNiveau.environnement;
        this.humeur += infosNiveau.bonheur;
        this.modifBarre();
    }

    verifWin(tab) {
        if (this.verif1 === 0 || this.verif2 === 0 || this.verif3 === 0) {
            for (let objet of tab) {
                if (objet === this.scenario.obj1) {
                    if (this.verif1 === 0) this.afficheObjectifReussi(
                        "Objectif 1 réussi, l'objet " + objet + " a été passé au niveau max"
                    );
                    this.verif1++;

                }
                if (objet === this.scenario.obj2) {
                    if (this.verif2 === 0) this.afficheObjectifReussi(
                        "Objectif 2 réussi, l'objet " + objet + " a été passé au niveau max"
                    );
                    this.verif2++;
                }
                if (objet === this.scenario.obj3) {
                    if (this.verif3 === 0) this.afficheObjectifReussi(
                        "Objectif 3 réussi, l'objet " + objet + " a été passé au niveau max"
                    );
                    this.verif3++;
                }
            }
        } else if (this.verif === false) {
            let afficheAchat = document.getElementById('achat');
            afficheAchat.innerHTML = "";
            afficheAchat.setAttribute('style', 'display: none;');
            afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E;border-top-left-radius: 80px 80px;border-top-right-radius: 80px 80px;border-bottom-left-radius: 80px 80px;border-bottom-right-radius: 80px 80px; height: 30%; width: 35%; visible: hidden; border:5px solid black;');

            let div = document.createElement('div');
            div.innerHTML = "<div id='dialog' role='dialog' aria-hidden='true' class='c-dialog'><div id='dialog2' role='document' class='c-dialog__box'> <h2 id='dialog-title' margin-top: 10px;>Fin de la partie !</h2><p id='dialog-desc'>Vous avez gagné, félicitation <br>"+this.scenario.description_fin+"</p><p>Cliquer pour continuer</p><a id='quitter' href='/'>Quitter</a></div></div>";

            afficheAchat.appendChild(div);
            div.setAttribute('style', 'color: white; margin-top: 13px; text-align:center; font-size: 20px; margin-');
            this.verif = true;

            let body = document.getElementById('body');
            body.addEventListener('click', () => {
                window.location.href = "/";
            });
        }
    }

    afficheObjectifReussi(text) {
        let affichageAchatChat = document.getElementById('chat');
        let div = document.createElement('div');
        let txtChat = document.createElement('p');
        txtChat.innerHTML = text;
        div.setAttribute('style',
            'color: #212529; ' +
            'background-color: white; ' +
            'border-radius: 10px; ' +
            'text-align: center; ' +
            'padding: 10px; ' +
            'margin-bottom: 10px'
        );
        div.appendChild(txtChat);
        affichageAchatChat.prepend(div);
    }

    verifLoose() {
        if (this.verif === false) {
            let body = document.getElementById('body');
            if (this.humeur === 0) {
                let afficheAchat = document.getElementById('achat');
                afficheAchat.innerHTML = "";
                afficheAchat.setAttribute('style', 'display: none;');
                afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E;border-top-left-radius: 80px 80px;border-top-right-radius: 80px 80px;border-bottom-left-radius: 80px 80px;border-bottom-right-radius: 80px 80px; height: 30%; width: 35%; visible: hidden; border:5px solid black;');

                let div = document.createElement('div');
                div.innerHTML = "<div id='dialog' role='dialog' aria-hidden='true' class='c-dialog'><div id='dialog2' role='document' class='c-dialog__box'> <h2 id='dialog-title' margin-top: 10px;>Fin de la partie !</h2><p id='dialog-desc'>Vous avez perdu</p><p>Votre confort est à 0</p><p>Cliquer pour continuer</p><a id='quitter' href='/'>Quitter</a></div></div>";
                
                afficheAchat.appendChild(div);
                
                afficheAchat.appendChild(div);
                div.setAttribute('style', 'color: white; margin-top: 13px; text-align:center; font-size: 20px; margin-');

                this.verif = true;
                body.addEventListener('click', () => {
                    window.location.href = "/";
                });
                return 1;
            } else if (this.environnement === 0) {
                let afficheAchat = document.getElementById('achat');
                afficheAchat.innerHTML = "";
                afficheAchat.setAttribute('style', 'display: none;');
                afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E;border-top-left-radius: 80px 80px;border-top-right-radius: 80px 80px;border-bottom-left-radius: 80px 80px;border-bottom-right-radius: 80px 80px; height: 30%; width: 35%; visible: hidden; border:5px solid black;');

                let div = document.createElement('div');
                div.innerHTML = "<div id='dialog' role='dialog' aria-hidden='true' class='c-dialog'><div id='dialog2' role='document' class='c-dialog__box'> <h2 id='dialog-title' margin-top: 10px;>Fin de la partie !</h2><p id='dialog-desc'>Vous avez perdu</p><p>L'Environnement est à 0</p><p>Cliquer pour continuer</p><a id='quitter' href='/'>Quitter</a></div></div>";
                
                afficheAchat.appendChild(div);
                div.setAttribute('style', 'color: white; margin-top: 13px; text-align:center; font-size: 20px; margin-');

                this.verif = true;
                body.addEventListener('click', () => {
                    window.location.href = "/";
                });
                return 1;
            }
        }
    }
}

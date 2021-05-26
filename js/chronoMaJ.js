let debitModif = (function() {
    let debit;

    return {
        setDebit(deb) {
            debit = deb;
        },
        start(){
            gameView.barreDebit.modifBarre(debit);
        }
    }
})();

class timee {
    constructor(time, elmtName, cacher, cacher2, element) {
        this.timeMaJ = time;
        this.elmt = elmtName;
        this.myVar;
        this.verif = false;
        this.cacher = cacher;
        this.cacher2 = cacher2;
        this.element = element;
        this.maxTime = time;

        element.majEnCours = true;
        element.addBarre();
    }
    getElmt() {
        return this.elmt;
    }
    start(){
        (this.cacher).setAttribute('style','display: none');
        (this.cacher2).setAttribute('style','display: none');
        document.getElementById("bip"+this.elmt).innerHTML = "MaJ en cours : " + this.timeMaJ + " secondes restantes ...";
        this.dec(this.elmt, this.timeMaJ, this.verif, this.cacher, this.cacher2, this.element, this.maxTime);
    }

    dec(elmt, time, verif, cacherachat, cachermaJ, element, maxTime) {
        let timer = setInterval(function() {
            element.barre.modifBarre(time-1,maxTime);
            time--;
            if(time <= 0) {
                if(verif === false) {
                    element.majEnCours = false;
                    if (stockageObj.every(unElement => unElement.majEnCours === false)) {
                        cacherachat.setAttribute('style', 'display: block; font-size: 14px;color: black;background: #BFB99E; border: 5px solid black; border-top-right-radius: 20px; border-bottom-right-radius: 20px;');
                        cachermaJ.setAttribute('style', 'display: block; font-size: 14px;color: black;background: #BFB99E; border: 5px solid black; border-top-left-radius: 20px; border-bottom-left-radius: 20px;');
                    }
                    verif = true;
                    let soundMAJ = new Audio('../img/MAJ.mp3');
                    soundMAJ.play().then();
                    element.finBarre();
                    element.etat = 3;
                    clearTimeout(element.time);
                    element.degrade();
                    achat.suppMaj(elmt);
                    scriptMagique.eventMaj();
                    gameView.modifVar('debit', element.infosNiveau.coutDebit);
                }
                let affichageAchatChat = document.getElementById('chat');
                let div = document.createElement('div');
                let txtChat = document.createElement('p');
                txtChat.innerHTML = "Le " + elmt + " vient d'etre mis à jour !";
                div.setAttribute('style', 'color: purple; border-left : 6px solid purple; padding-left : 3px; ');
                div.appendChild(txtChat);
                affichageAchatChat.prepend(div);
                clearInterval(timer);
            }
            else {
                if(document.getElementById("bip"+elmt) != null) {
                    document.getElementById("bip"+elmt).innerHTML = "MaJ en cours : " + time + " secondes restantes ...";
                }

            }
        }, 1000);
    }
}

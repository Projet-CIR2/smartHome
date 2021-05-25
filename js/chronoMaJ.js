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

        element.addBarre();
    }
    getElmt() {
        return this.elmt;
    }
    start(){
        (this.cacher).setAttribute('style','display: none');
        (this.cacher2).setAttribute('style','display: none');
        document.getElementById("bip"+this.elmt).innerHTML = "MaJ en cours : " + this.timeMaJ + " secondes restantes ...";
        this.dec(this.elmt, this.timeMaJ, this.myVar, this.verif, this.cacher, this.cacher2, this.element, this.maxTime);
    }
    setTime(nb) {
        this.timeMaJ = nb;
    }
    dec(elmt, time, myVar, verif, cacherachat, cachermaJ, element, maxTime) {
        this.myVar = setInterval(function() {
            element.barre.modifBarre(time-1,maxTime);
            time--;
            if(time <= 0) {
                if(document.getElementById("bip"+elmt) != null && verif == false) {
                    document.getElementById("bip"+elmt).innerHTML = "TERMINE!";
                    cacherachat.setAttribute('style','display: block; font-size: 14px;color: black;background: #BFB99E; border: 5px solid black; border-top-right-radius: 20px; border-bottom-right-radius: 20px;');
                    cachermaJ.setAttribute('style', 'display: block; font-size: 14px;color: black;background: #BFB99E; border: 5px solid black; border-top-left-radius: 20px; border-bottom-left-radius: 20px;');
                    verif = true;
                }
                clearInterval(myVar);
            }
            else {	
                if(document.getElementById("bip"+elmt) != null) {
                    document.getElementById("bip"+elmt).innerHTML = "MaJ en cours : " + time + " secondes restantes ...";
                } 
               
            }	
        }, 1000);
    }
}
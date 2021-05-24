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
    constructor(time, elmtName, cacher, cacher2) {
        this.timeMaJ = time;
        this.elmt = elmtName;
        this.myVar;
        this.verif = false;
        this.cacher = cacher;
        this.cacher2 = cacher2;
    }
    getElmt() {
        return this.elmt;
    }
    start(){
        (this.cacher).setAttribute('style','display: none');
        (this.cacher2).setAttribute('style','display: none');
        document.getElementById("bip"+this.elmt).innerHTML = "MaJ en cours : " + this.timeMaJ + " secondes restantes ...";
        this.dec(this.elmt, this.timeMaJ, this.myVar, this.verif, this.cacher, this.cacher2);
    }
    setTime(nb) {
        this.timeMaJ = nb;
    }
    dec(elmt, time, myVar, verif, cacherachat, cachermaJ) {
        this.myVar = setInterval(function() {
            time--;
            if(time <= 0) {
                if(document.getElementById("bip"+elmt) != null && verif == false) {
                    document.getElementById("bip"+elmt).innerHTML = "TERMINE!";
                    cacherachat.setAttribute('style','display: block');
                    cachermaJ.setAttribute('style', 'display: block');
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
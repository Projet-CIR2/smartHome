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
    constructor(time, elmtName) {
        this.timeMaJ = time;
        this.elmt = elmtName;
        this.myVar;
        this.verif = false;
    }
    getElmt() {
        return this.elmt;
    }
    start(){
        document.getElementById("bip"+this.elmt).innerHTML = "MaJ en cours : " + this.timeMaJ + " secondes restantes ...";
        this.dec(this.elmt, this.timeMaJ, this.myVar, this.verif);
    }
    setTime(nb) {
        this.timeMaJ = nb;
    }
    dec(elmt, time, myVar, verif) {
        this.myVar = setInterval(function() {
            time--;
            if(time <= 0) {
                if(document.getElementById("bip"+elmt) != null && verif == false) {
                    document.getElementById("bip"+elmt).innerHTML = "TERMINE!";
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
let chronoTIME = (function() {
    let timeMaJ;
    let myVar;
    let elmt;

    return {
        setTimeMaJ(time, elmtName) {
            timeMaJ = time;
            elmt = elmtName
            myVar = myVar+elmtName;
        },
        start(){
            document.getElementById("bip"+elmt).innerHTML = "MaJ en cours : " + timeMaJ + " secondes restantes ...";
            myVar = setInterval(function() {
                timeMaJ--;
                if(timeMaJ <= 0) {
                    document.getElementById("bip"+elmt).innerHTML = "TERMINE!";
                    clearInterval(myVar);
                }
                else {	
                    document.getElementById("bip"+elmt).innerHTML = "MaJ en cours : " + timeMaJ + " secondes restantes ...";
             }	
            }, 1000);
        }
    }
})();

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
    }
    getElmt() {
        return this.elmt;
    }
    start(){
        document.getElementById("bip"+this.elmt).innerHTML = "MaJ en cours : " + this.timeMaJ + " secondes restantes ...";
        this.dec(this.elmt, this.timeMaJ, this.myVar);
    }
    dec(elmt, time, myVar) {
        this.myVar = setInterval(function() {
            time--;
            if(time <= 0) {
                document.getElementById("bip"+elmt).innerHTML = "TERMINE!";
                clearInterval(myVar);
            }
            else {	
                
                document.getElementById("bip"+elmt).innerHTML = "MaJ en cours : " + time + " secondes restantes ...";
         }	
        }, 1000);
    }
}
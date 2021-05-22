let chronoTIME = (function() {
    let timeMaJ;
    let myVar;

    return {
        setTimeMaJ(time) {
            timeMaJ = time;
        },
        start(){
            document.getElementById("bip").innerHTML = "MaJ en cours : " + timeMaJ + " secondes restantes ...";
            myVar = setInterval(function() {
                timeMaJ--;
                if(timeMaJ <= 0) {
                    document.getElementById("bip").innerHTML = "TERMINE!";
                    clearInterval(myVar);
                }
                else {	
                    document.getElementById("bip").innerHTML = "MaJ en cours : " + timeMaJ + " secondes restantes ...";
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
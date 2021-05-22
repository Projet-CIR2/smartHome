let chronoTIME = (function() {
    let timeMaJ;
    let intervalId = null;

    return {
        setTimeMaJ(time) {
            timeMaJ = time;
        },
        start(){
            document.getElementById("bip").innerHTML = "MaJ en cours : " + timeMaJ + " secondes restantes ...";
            setInterval(function() {
                timeMaJ--;
                if(timeMaJ <= 0) {
                    clearInterval(intervalId);
                    document.getElementById("bip").innerHTML = "TERMINE!";	
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
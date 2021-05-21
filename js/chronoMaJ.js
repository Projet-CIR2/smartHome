let chronoTIME = (function() {
    let timeMaJ;
    let intervalId = null;

    return {
        setTimeMaJ(time) {
            timeMaJ = time;
            console.log(timeMaJ);
        },
        start(){
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
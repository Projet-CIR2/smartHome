class Barres {
    constructor(idBarre) {
        this.idBarre = idBarre;
    }

    modifBarre(nb) {
        if ((nb >= 0 && nb <= 100) || this.idBarre === 'argent') {
            let currentDiv = document.getElementById(this.idBarre);
            if (this.idBarre === 'argent') {
                currentDiv.textContent = nb + '€';
            }
            else {
                currentDiv.setAttribute('aria-valuenow', nb);
                currentDiv.setAttribute('style', 'width: ' + nb + '%');
                currentDiv.textContent = nb + '%';
            }
        }
    }
}
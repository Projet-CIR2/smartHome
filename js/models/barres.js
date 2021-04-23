class Barres {
    constructor(idBarre) {
        this.idBarre = idBarre;
    }

    modifBarre(nb) {
        if (nb >= 0 && nb <= 100) {
            let currentDiv = document.getElementById(this.idBarre);
            currentDiv.setAttribute('aria-valuenow', nb);
            currentDiv.setAttribute('style', 'width: ' + nb + '%');
            currentDiv.textContent = nb + '%';
        }
    }
}
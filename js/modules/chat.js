//const { text } = require("body-parser");

let chat = (function () {
    // ajoute le texte au chat
    function afficheTexte(texte, couleur) {
        let divChat = document.getElementById('chat');

        if (divChat.childElementCount >= 25) divChat.removeChild(divChat.lastElementChild);
        
        //création div pour mettre texte dedans

        let div = document.createElement('div');
        divChat.prepend(div);
        div.style.borderLeft = '6px solid '+ couleur;
        div.style.paddingLeft = '3px';


        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = texte.description;

        let stat = document.createElement('p');
        div.appendChild(stat);
        
        if (texte.argent !== undefined) {
        let textInfo = "";

        if (texte.argent !== 0 && texte.argent !== undefined) {
            if(texte.argent < 0) {
                textInfo += 'Vous avez perdu : ' + Math.abs(texte.argent) + '€ <br>';

                // textInfo += "Vous avez perdu : " + texte.argent + "€" + "<br>";
            }
            else {
                textInfo += "Vous avez gagné : ";
                textInfo += texte.argent;
                textInfo += "€";
                textInfo += "<br/>";
            }
        }

        if (texte.debit !== 0 && texte.debit !== undefined) {
            if(texte.debit < 0) {
                textInfo += "  Vous avez perdu : ";
                textInfo += Math.abs(texte.debit);
                textInfo += " de debit";
                textInfo += "<br/>";
            }
            else {
                textInfo += "  Vous avez gagné : ";
                textInfo += texte.debit;
                textInfo += " de debit";
                textInfo += "<br/>";
            }
        }

        if (texte.humeur !== 0 && texte.humeur !== undefined) {
            if(texte.humeur < 0) {
                textInfo += "  Vous avez perdu : ";
                textInfo += Math.abs(texte.humeur);
                textInfo += " de confort";
                textInfo += "<br/>";
            }
            else {
                textInfo += "  Vous avez gagné : ";
                textInfo += texte.humeur;
                textInfo += " de confort";
                textInfo += "<br/>";
            }
        }

        if (texte.environnement !== 0 && texte.environnement !== undefined) {
            if(texte.environnement < 0) {
                textInfo += "  Vous avez perdu : ";
                textInfo += Math.abs(texte.environnement);
                textInfo += " d'environnement";
            }
            else {
                textInfo += "  Vous avez gagné : ";
                textInfo += texte.environnement;
                textInfo += " d'environnement";
            }
        }

        stat.innerHTML = textInfo;
        stat.style.color = couleur;
    }
    else {
        stat.textContent = texte;
    }


        if (couleur !== undefined) p.setAttribute('style', 'color:' + couleur);
    }

    // affiche les textes n'ayant pas d'impact
    function texteEvent() {
        if (Math.floor(Math.random() * 2)) {
            afficheTexte(json.events[Math.floor(Math.random() * json.events.length)]);
        }
    }

    // affiche les textes ayant un impact sur le jeu
    function texteImportant() {
        let event;
        // une chance sur 2 que l'événement soit positif ou négatif
        if (Math.floor(Math.random() * 3) <= 1) {
            event = json.evenements_important.positif[Math.floor(Math.random() * json.evenements_important.positif.length)];
            afficheTexte(event, 'blue');
            let soundBonus = new Audio('../../img/bonus.mp3');
            soundBonus.play().then();
        }
        else {
            event = json.evenements_important.negatif[Math.floor(Math.random() * json.evenements_important.negatif.length)];
            afficheTexte(event, 'red');
            let soundAlert = new Audio('../../img/alert.mp3');
            soundAlert.play().then();
        }

        // on modifie les valeurs du jeu
        if (event.humeur !== 0) gameView.modifVar('humeur', event.humeur);
        if (event.argent !== 0) gameView.modifVar('argent', event.argent);
        if (event.debit !== 0) {
            gameView.modifVar('debit', event.debit);
            if (event.debit < 0) {
                setInterval(() => {
                    gameView.modifVar('debit', -1 * event.debit);
                }, 20000);
            }
        }
        if (event.environnement !== 0) gameView.modifVar('environnement', event.environnement);
    }

    return {
        // ajout des textes
        lanceTexte() {
            setInterval(texteEvent, 90000); //90000
            setInterval(texteImportant, 30000); //30000
        }
    }
})();

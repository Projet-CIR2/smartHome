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
        p.textContent = texte;
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
        if (Math.floor(Math.random() * 2)) {
            event = json.evenements_important.positif[Math.floor(Math.random() * json.evenements_important.positif.length)];
            afficheTexte(event.description, 'blue');
            let soundBonus = new Audio('../../img/bonus.mp3');
            soundBonus.play().then();
        }
        else {
            event = json.evenements_important.negatif[Math.floor(Math.random() * json.evenements_important.negatif.length)];
            afficheTexte(event.description, 'red');
            let soundAlert = new Audio('../../img/alert.mp3');
            soundAlert.play().then();
        }

        // on modifie les valeurs du jeu
        if (event.humeur !== 0) gameView.modifVar('humeur', event.humeur);
        if (event.argent !== 0) gameView.modifVar('argent', event.argent);
        if (event.debit !== 0) gameView.modifVar('debit', event.debit);
        if (event.environnement !== 0) gameView.modifVar('environnement', event.environnement);
    }

    return {
        // ajout des textes
        lanceTexte() {
            setInterval(texteEvent, 90000);
            setInterval(texteImportant, 30000);
        }
    }
})();

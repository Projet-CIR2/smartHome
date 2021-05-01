let chat = (function () {
    // ajoute le texte au chat
    function afficheTexte(texte, couleur) {
        let divChat = document.getElementById('chat');

        if (divChat.childElementCount >= 25) divChat.removeChild(divChat.lastElementChild);

        let p = document.createElement('p');
        divChat.prepend(p);
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
        }
        else {
            event = json.evenements_important.negatif[Math.floor(Math.random() * json.evenements_important.negatif.length)];
            afficheTexte(event.description, 'red');
        }

        // on modifie les valeurs du jeu
        VarGame.modifVar('humeur', event.humeur);
        VarGame.modifVar('argent', event.argent);
        VarGame.modifVar('debit', event.debit);
    }

    return {
        // ajout des textes
        lanceTexte() {
            setInterval(texteEvent, 90000);
            // setInterval(texteImportant, 30000);
            setInterval(texteImportant, 1000);
        }
    }
})();
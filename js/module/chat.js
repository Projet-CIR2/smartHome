let chat = (function () {
    function afficheTexte(texte, couleur) {
        let divChat = document.getElementById('chat');

        if (divChat.childElementCount >= 25) divChat.removeChild(divChat.lastElementChild);

        let p = document.createElement('p');
        divChat.prepend(p);
        p.textContent = texte;
        if (couleur !== undefined) p.setAttribute('style', 'color:' + couleur);
    }

    return {
        texteEvent() {
            if (Math.floor(Math.random() * 2)) {
                afficheTexte(json.events[Math.floor(Math.random() * json.events.length)]);
            }
        },

        texteImportant() {
            let event;
            if (Math.floor(Math.random() * 2)) {
                event = json.evenements_important.positif[Math.floor(Math.random() * json.evenements_important.positif.length)];
                afficheTexte(event.description, 'blue');
            }
            else {
                event = json.evenements_important.negatif[Math.floor(Math.random() * json.evenements_important.negatif.length)];
                afficheTexte(event.description, 'red');
            }

            VarGame.modifVar('humeur', event.humeur);
            VarGame.modifVar('argent', event.argent);
            VarGame.modifVar('debit', event.debit);
        },

        lanceTexte() {
            setInterval(this.texteEvent, 1000);
            setInterval(this.texteImportant, 10000);
        }
    }
})();
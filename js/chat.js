let chat = (function () {
    function afficheTexte(texte) {
        let divChat = document.getElementById('chat');

        if (divChat.childElementCount >= 25) divChat.removeChild(divChat.lastElementChild);

        let p = document.createElement('p');
        divChat.prepend(p);
        p.textContent = texte;
    }

    return {
        texteEvent() {
            if (Math.floor(Math.random() * 2)) {
                afficheTexte(json.events[Math.floor(Math.random() * json.events.length)]);
            }
        },

        lanceTexte() {
            setInterval(this.texteEvent, 1000);
        }
    }
})();
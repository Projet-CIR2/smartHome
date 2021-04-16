let chat = (function () {
    return {
        afficheTexte(texte) {
            let divChat = document.getElementById('chat');

            if (divChat.childElementCount >= 10) divChat.removeChild(divChat.lastElementChild);

            let p = document.createElement('p');
            divChat.prepend(p);
            p.textContent = window.Date();
        },

        lanceTexte() {
            let compteur = 0;
            setInterval(this.afficheTexte, 1000, 'coucou');
        }
    }
})();
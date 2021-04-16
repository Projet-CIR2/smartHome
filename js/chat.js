let chat = (function () {
    return {
        afficheTexte(texte) {
            let divChat = document.getElementById('chat');

            if (divChat.childElementCount >= 50) divChat.removeChild(divChat.firstElementChild);

            let p = document.createElement('p');
            divChat.appendChild(p);
            p.textContent = window.Date;
        },

        lanceTexte() {
            let compteur = 0;
            setInterval(this.afficheTexte, 100, 'coucou');
        }
    }
})();
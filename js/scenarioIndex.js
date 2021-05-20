socket.on('scena', (elmt) => {
    console.log(elmt);
    console.log(elmt.titre);

    let chat = document.getElementById('chat');
    chat.setAttribute('style', 'font-size: 12px;');

    let p = document.createElement('p');
    p.textContent = "Scénario activé : " + elmt.titre;
    p.setAttribute('style', 'text-shadow: inherit');

    let desc = document.createElement('p');
    desc.textContent = "Description : " + elmt.description_debut;
    desc.setAttribute('style', 'text-shadow: inherit');

    chat.appendChild(desc);
    chat.appendChild(p);
    
});



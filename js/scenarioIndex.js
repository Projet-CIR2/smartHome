socket.on('scena', (elmt) => {
    let chat = document.getElementById('chat');
    chat.setAttribute('style', 'font-size: 12px;');

    let scenar = document.createElement('div');
    chat.appendChild(scenar);
    scenar.style.backgroundColor = '#FFF5EE';
    scenar.style.height = '100px';
    scenar.style.textAlign = 'center';
    scenar.style.padding = '10px';
    scenar.style.borderRadius = '10px';

    let p = document.createElement('p');
    p.textContent = "Scénario activé : " + elmt.titre;
    p.setAttribute('style', 'text-shadow: inherit');

    let desc = document.createElement('p');
    desc.innerHTML = "Description : <br><br>" + elmt.description_debut;
    desc.setAttribute('style', 'text-shadow: inherit');

    let infos = document.createElement('p');
    infos.innerHTML = "Informations de départ : <br><br>Votre Humeur : " + elmt.argent + "<br>Votre débit internet : " + elmt.debit + "<br>Votre argent : " + elmt.argent ;
    infos.setAttribute('style', 'text-shadow: inherit');

    scenar.appendChild(infos);
    scenar.appendChild(desc);
    scenar.appendChild(p);
    
});

    const gameView = new GameView(elmt);
    VarGame.initView(gameView, 1);
});
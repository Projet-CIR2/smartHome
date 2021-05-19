let createObjetMaj = function (mOru, title, text, btn) {
    let currentDiv = document.getElementById(mOru);

    let div = document.createElement('div');
    currentDiv.appendChild(div);
    div.setAttribute('class', 'container object');
    div.setAttribute('style', 'display: block');

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = title;

    p = document.createElement('p');
    div.appendChild(p);
    p.textContent = text;

    let button = document.createElement('button');
    div.appendChild(button);
    button.setAttribute('class', 'btn btn-warning btn-sm');
    button.textContent = btn;
    if (mOru === 'd_Upgrade') {
        button.onclick = () => {
            div.remove();
            achat.addMaj(title);
            let afficheAchat = document.getElementById('achat');
            let img = document.createElement('img');
            let pAchat = document.createElement('p');

            afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E; border-radius: 4px; height: 30%; width: 30%;');
            img.src = "./img/cam.png";
            img.setAttribute('style', 'height: 120; width: 120px; margin-left: 25%; margin-top: 13px;');
            img.id = 'image';

            pAchat.textContent = "Vous avez acheté " + title;
            pAchat.setAttribute('style', 'color: white; margin-top: 10px; text-align:center;');
            pAchat.id = 'achatTxt'

            let pAchatHTML = document.getElementById('achatTxt');
            let imgHTML = document.getElementById('image');
            
            if(afficheAchat.childElementCount == 2) {
                afficheAchat.removeChild(imgHTML);
                afficheAchat.removeChild(pAchatHTML);
            }
            afficheAchat.appendChild(img);
            afficheAchat.appendChild(pAchat);
        };    
    }
}
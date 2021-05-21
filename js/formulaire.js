let createObjetMaj = function (mOru, title, text, btn, element) {
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
    p.innerHTML = text + "<br><br>";
    p.id="infos";

    let button;

    if (element.niveau !== 3) {
        button = document.createElement('button');
        div.appendChild(button);
        button.setAttribute('class', 'btn btn-warning btn-sm');
        button.textContent = btn;
        if(mOru == 'd_MaJ') {
            button.id = 'majButton';
        }
    }
    if (mOru === 'd_Upgrade') {
        let pAchat = document.createElement('p');
        let pClick = document.createElement('p');
        if (element.niveau !== 3) button.onclick = () => {
            let afficheAchat = document.getElementById('achat');
            afficheAchat.innerHTML = "";
            afficheAchat.setAttribute('style', 'display: none;');


            let pAchatHTML = document.getElementById('achatTxt');
            let pClickHTML = document.getElementById('pClick');

            if (element.infosNiveau.coutAmelioration > gameView.getArgentPlayer()) {
                afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E;border-top-left-radius: 80px 80px;border-top-right-radius: 80px 80px;border-bottom-left-radius: 80px 80px;border-bottom-right-radius: 80px 80px; height: 35%; width: 32%; visible: hidden; border:5px solid black;');

                let img = document.createElement('img');
                img.src = "./img/icone_obj/attention.png";
                img.setAttribute('style', 'height: 100; width: 100px; margin-left: 35%; margin-top: 15px; ');
                img.id = 'image';

                pAchat.textContent = "Vous n'avez pas assez d'argent pour acheter " + element.nom;
                pAchat.setAttribute('style', 'color: white; margin-top: 13px; text-align:center; font-size: 20px;');
                pAchat.id = 'achatTxt';

                pClick.textContent = "Cliquer pour continuer";
                pClick.setAttribute('style', 'color: white; margin-top: 7px; text-align:center; font-size: 15px;');
                pClick.id = 'pClick';


                let imgHTML = document.getElementById('image');

                if (afficheAchat.childElementCount === 3) {
                    afficheAchat.removeChild(imgHTML);
                    afficheAchat.removeChild(pAchatHTML);
                    afficheAchat.removeChild(pClickHTML);

                }
                afficheAchat.appendChild(img);
                afficheAchat.appendChild(pAchat);
                afficheAchat.appendChild(pClick);
            } else {
                // si on peut acheter, on assigne à la case polygon son objet
                stockageVar.clickPolygon.objet = title;
                stockageVar.clickPolygon.removeAlpha();
                stockageVar.clickPolygon.refreshUpgrade();

                // let obj = stockageObj.find(obj => obj.objet.nom === element.nom);
                if (element.niveau === 1) element.position(stockageVar.clickPolygon.x, stockageVar.clickPolygon.y);
                element.levelUp();

                stockageVar.clickPolygon = undefined;
                stockageVar.click = false;

                // on supprime la div avec le bouton
                // div.remove();
                // on ajoute l'objet aux objets achetés
                achat.addMaj(title);
                let img = document.createElement('img');

                afficheAchat.setAttribute('style', 'position: absolute; margin-top: 20%; margin-left: 35%; background-color: #BFB99E;border-top-left-radius: 80px 80px;border-top-right-radius: 80px 80px;border-bottom-left-radius: 80px 80px;border-bottom-right-radius: 80px 80px; height: 36%; width: 32%; visible: hidden; border:5px solid black;');
                img.src = "./img/icone_obj/" + title + ".png";
                img.setAttribute('style', 'height: 100; width: 100px; margin-left: 30%; margin-top: 15px; ');
                img.id = 'image';

                pAchat.textContent = "Vous avez acheté " + title;
                pAchat.setAttribute('style', 'color: white; margin-top: 13px; text-align:center; font-size: 20px;');
                pAchat.id = 'achatTxt';

                pClick.textContent = "Cliquer pour continuer";
                pClick.setAttribute('style', 'color: white; margin-top: 7px; text-align:center; font-size: 15px;');
                pClick.id = 'pClick';

                let pAchatHTML = document.getElementById('achatTxt');
                let imgHTML = document.getElementById('image');
                let pClickHTML = document.getElementById('pClick');

                if (afficheAchat.childElementCount === 3) {
                    afficheAchat.removeChild(imgHTML);
                    afficheAchat.removeChild(pAchatHTML);
                    afficheAchat.removeChild(pClickHTML);

                }
                afficheAchat.appendChild(img);
                afficheAchat.appendChild(pAchat);
                afficheAchat.appendChild(pClick);
            }
        }
    } else {
        button.onclick = () => {
            console.log(element);
            console.log('click maj sur : ' + element.nom);
            let tmp = element.infosNiveau.tempsReparation;
            let div = document.getElementById('d_MaJ');
            let p  = document.getElementById('infos');
            let p2 = document.createElement('p');
            p2.id = "bip";
            p.appendChild(p2);
            
            chronoTIME.setTimeMaJ(tmp);
            chronoTIME.start();
            
        }
    }

}

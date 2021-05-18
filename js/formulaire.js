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
        };    
    }
}
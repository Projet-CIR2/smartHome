let createObjetMaj = function (mOru, title, text, btn, val) {
    let currentDiv = document.getElementById(mOru);

    let div = document.createElement('div');
    currentDiv.appendChild(div);
    div.setAttribute('class', 'container object');
    div.setAttribute('style', 'display: block');

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = title;

    let button = document.createElement('button');
    div.appendChild(button);
    button.setAttribute('class', 'btn btn-warning btn-sm');
    button.textContent = btn;
    if (mOru === 'd_Upgrade') {
        button.onclick = () => {
            achat.popMaj(val);
            createObjetMaj('d_Maj', title, text, btn, val);

            console.log(val);
        };    
    }
}
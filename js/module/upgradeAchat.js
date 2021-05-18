let achat = (function() {
    let data = upgradeJSON.events;
    function recupData() {
        data.forEach(element => {
            let title = element;
            let div = document.createElement('div');
            div.className = 'container';
            div.id = 'object';
            let p = document.createElement('p');
            p.innerHTML = title;
            let button = document.createElement('button');
            button.className = 'btn btn-warning btn-sm';
            button.innerHTML = "Acheter";
            button.id = 'boutton';

            var body = document.getElementById("d_Upgrade");
            body.appendChild(div);
            div.appendChild(p);
            div.appendChild(button);

        });
    }
    return {
        achat() {
            recupData();
        }
    }
})();
/*
let data = upgradeJSON.events;
console.log(data);*/
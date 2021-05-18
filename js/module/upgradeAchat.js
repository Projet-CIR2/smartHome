let achat = (function() {
    let data = upgradeJSON.events;
    let dataMaj = majJSON.events;
    let dataMajDesc = majJSON.lores;
   
    function recupData() {
        let val, title, div, p, button;
        val = 0;

        data.forEach(element => {
            createObjetMaj('d_Upgrade', element, '', 'Acheter', val);


            // title = element;
            // div = document.createElement('div');
            // div.className = 'container';
            // div.id = 'object';
            // div.style="display: block;";
            // p = document.createElement('p');
            // p.textContent = title;
            // button = document.createElement('button');
            // button.className = 'btn btn-warning btn-sm';
            // button.textContent = "Acheter";
            // button.id = 'boutton'+val;
            

            // button.addEventListener("click", () => {
            //     console.log(button.id);
            // });

            // var body = document.getElementById("d_Upgrade");
            // body.appendChild(div);
            // div.appendChild(p);
            // div.appendChild(button);

            val++;
        });
       
    }
    function recupDataMaj() {
        let val, div, p, button, desc;
        val = 0;
        dataMaj.forEach(element => {
            title = element;
            div = document.createElement('div');
            div.className = 'container';
            div.id = 'object';
            div.style="display: none;";
            p = document.createElement('p');
            p.textContent = element;
            button = document.createElement('button');
            button.className = 'btn btn-warning btn-sm';
            button.textContent = "Mettre à jour";
            button.id = 'boutton'+val;
            button.style = 'margin-left: 16px;';
            button.addEventListener("click", () => {
                console.log(button.id);
            });

            var body = document.getElementById("d_MaJ");
            body.appendChild(div);
            div.appendChild(p);

            desc = document.createElement('p');
            desc.id ='describ';
            desc.textContent = dataMajDesc[val];
            div.appendChild(desc);
            div.appendChild(button);

            val++;
        });
    }

    return {
        achat() {
            recupData(),
            recupDataMaj()
        },

        popMaj(nb) {
            dataMaj.splice(nb, 1);
        }
    }
})();


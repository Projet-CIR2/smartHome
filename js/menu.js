let data = json.Scenario;
let val = 0;
data.forEach(element => {
    let li = document.getElementById("carousel-itemID");

    let divCard = document.createElement('div');
    divCard.id= "card";

    let h2 = document.createElement('h2');
    h2.textContent = element.titre;
    h2.className = "card-title";

    let divContent = document.getElementById("card-content");
    
    let p = document.createElement('p');
    p.textContent = element.description_debut;

    let diffi = document.createElement('p');
    diffi.textContent = element.difficulte;

    if (element.difficulte == 'Facile') {
        diffi.style.color = '#32CD32';
    }

    if (element.difficulte == 'Normal') {
        diffi.style.color = 'orange';
    }

    if (element.difficulte == 'Difficile') {
        diffi.style.color = 'red';
    }
    
    let a = document.createElement('a');
    a.id = "boutton" + val;
    a.className = "button";
    a.textContent = "Jouer";

    a.addEventListener('click', event => {
        event.preventDefault();
        scenarIndexer.send(element);
    });
  
    li.appendChild(divCard);
    divCard.appendChild(h2);
    divCard.appendChild(divContent);
    
    divCard.appendChild(p);
    divCard.appendChild(diffi);
    divCard.appendChild(a);
    val++;
    
});
let data = json.Scenario;

data.forEach(element => {
    let li = document.getElementById("carousel-item");

    let divCard = document.createElement('div');
    divCard.id= "card";

    let h2 = document.createElement('h2');
    h2.textContent = element.titre;
    h2.className = "card-title";

    let divContent = document.getElementById("card-content");
    
    let p = document.createElement('p');
    p.textContent = element.description_debut;
    
    let a = document.createElement('a');
    a.className = "button";
    a.textContent = "Selectionner";

    li.appendChild(divCard);
    divCard.appendChild(h2);
    divCard.appendChild(divContent);
    
    divCard.appendChild(p);
    divCard.appendChild(a);
});

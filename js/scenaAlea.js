let data = json.Scenario;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let random = getRandomInt(7);

let scenario = data[random];

let jouer = document.getElementById('play');
jouer.addEventListener('click', event => {
    event.preventDefault();
    scenarIndexerMenu.send(scenario);
});
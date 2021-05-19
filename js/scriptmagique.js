let MAJ = document.getElementById("MaJ");
let upg = document.getElementById("Upgrade");
let majup = document.getElementById("upmaj")

MAJ.addEventListener("click", () => {
    clean();

    let div = document.createElement('div');
    majup.appendChild(div);
    div.setAttribute('id', 'd_MaJ');
    div.setAttribute('style', 'display: block; height: 55vh; overflow: auto;background-color: #3bd13c;');
  });

upg.addEventListener("click", () => {
    clean();
    let div = document.createElement('div');
    majup.appendChild(div);
    majup.style.backgroundColor = '#162cb8';
    div.setAttribute('id', 'd_Upgrade');
    div.setAttribute('style', 'display: block; height: 55vh; overflow: auto; background-color: #162cb8;');
  });

let clean = function () {
    let dupg = document.getElementById("d_Upgrade");
    if (dupg !== null) dupg.remove();

    let dMAJ = document.getElementById("d_MaJ");
    if (dMAJ !== null) dMAJ.remove();
}
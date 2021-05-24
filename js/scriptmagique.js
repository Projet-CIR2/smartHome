let scriptMagique = (function () {
    let MAJ;
    let upg;
    let majup;

    return {
        initEvent() {
            MAJ = document.getElementById("MaJ");
            upg = document.getElementById("Upgrade");
            majup = document.getElementById("upmaj");
            console.log(MAJ);

            MAJ.addEventListener("click", () => {
                this.clean();
                this.clickMaj();
                achat.verif();
            });
            upg.addEventListener("click", () => {
                this.clean();
                this.clickUpgrade();
                achat.verif();
            });
        },

        clickMaj() {
            let div = document.createElement('div');
            majup.style.backgroundColor = '#A09E97';
            majup.appendChild(div);
            div.setAttribute('id', 'd_MaJ');
            div.setAttribute('style', 'display: block; height: 55vh; overflow: auto;background-color: #A09E97;');

        },

        clickUpgrade () {
            let div = document.createElement('div');
            majup.appendChild(div);
            majup.style.backgroundColor = '#C9C8C4';
            div.setAttribute('id', 'd_Upgrade');
            div.setAttribute('style', 'display: block; height: 55vh; overflow: auto; background-color: #C9C8C4;');
        },

        clean() {
            let dupg = document.getElementById("d_Upgrade");
            if (dupg !== null) dupg.remove();

            let dMAJ = document.getElementById("d_MaJ");
            if (dMAJ !== null) dMAJ.remove();
        }
    }
})();


let MAJ = document.getElementById("MaJ");
let upg = document.getElementById("Upgrade");
let dMAJ = document.getElementById("d_MaJ");
let dupg = document.getElementById("d_Upgrade")

MAJ.addEventListener("click", () => {
    if(dMAJ.style.display != "none"){
      dMAJ.style.display = "none";
      dupg.style.display = "block";
    } else {
      dMAJ.style.display = "block";
      dupg.style.display = "none";
    }
  });

upg.addEventListener("click", () => {
    if(dupg.style.display != "none"){
      dupg.style.display = "none";
      dMAJ.style.display = "block";
    } else {
      dupg.style.display = "block";
      dMAJ.style.display = "none";
    }
  });
let MAJ = document.getElementById("MaJ");
let upg = document.getElementById("Upgrade");
let dMAJ = document.getElementById("d_MaJ");
let dupg = document.getElementById("d_Upgrade");
let majup = document.getElementById("upmaj")

MAJ.addEventListener("click", () => {
    if(dMAJ.style.display != "none"){
      //nothing
    } else {
      dMAJ.style.display = "block";
      dupg.style.display = "none";
      majup.style.backgroundColor = "#3bd13c";
    }
  });

upg.addEventListener("click", () => {
    if(dupg.style.display != "none"){
      //nothing
    } else {
      dupg.style.display = "block";
      dMAJ.style.display = "none";
      majup.style.backgroundColor = "#162cb8";
    }
  });
let BTNFP = document.getElementById("Fiche projet");
let BTNCDC = document.getElementById("Cahier des charges");
let BTNLEF = document.getElementById("Liens et favoris");
let BTNS1 = document.getElementById("Semaine 1");
let BTNS2 = document.getElementById("Semaine 2");
let BTNS3 = document.getElementById("Semaine 3");
let BTNS4 = document.getElementById("Semaine 4");
let BTNS5 = document.getElementById("Semaine 5");
let BTNS67 = document.getElementById("Semaine 6-7");
let BTNS8 = document.getElementById("Semaine 8");
let BTNS9 = document.getElementById("Semaine 9");
let BTNS10 = document.getElementById("Semaine 10");

let dFP = document.getElementById("FP");
let dCDC = document.getElementById("CDC");
let dLEF = document.getElementById("LEF");
let dS1 = document.getElementById("S1");
let dS2 = document.getElementById("S2");
let dS3 = document.getElementById("S3");
let dS4 = document.getElementById("S4");
let dS5 = document.getElementById("S5");
let dS67 = document.getElementById("S6-7");
let dS8 = document.getElementById("S8");
let dS9 = document.getElementById("S9");
let dS10 = document.getElementById("S10");

BTNFP.addEventListener("click", () => {
    if(dFP.style.display != "none"){
      //nothing
    } 
    else {
        dFP.style.display = "block";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS1.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

BTNCDC.addEventListener("click", () => {
    if(dCDC.style.display != "none"){
      //nothing
    } 
    else {
        dCDC.style.display = "block";
        dFP.style.display = "none";
        dLEF.style.display = "none";
        dS1.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNLEF.addEventListener("click", () => {
    if(dLEF.style.display != "none"){
      //nothing
    } 
    else {
        dLEF.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dS1.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS1.addEventListener("click", () => {
    if(dS1.style.display != "none"){
      //nothing
    } 
    else {
        dS1.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS2.addEventListener("click", () => {
    if(dS2.style.display != "none"){
      //nothing
    } 
    else {
        dS2.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS1.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS3.addEventListener("click", () => {
    if(dS3.style.display != "none"){
      //nothing
    } 
    else {
        dS3.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS1.style.display = "none";
        dS4.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS4.addEventListener("click", () => {
    if(dS4.style.display != "none"){
      //nothing
    } 
    else {
        dS4.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS1.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS5.addEventListener("click", () => {
    if(dS5.style.display != "none"){
      //nothing
    } 
    else {
        dS5.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS1.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS67.addEventListener("click", () => {
    if(dS67.style.display != "none"){
      //nothing
    } 
    else {
        dS67.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS1.style.display = "none";
        dS5.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS8.addEventListener("click", () => {
    if(dS8.style.display != "none"){
      //nothing
    } 
    else {
        dS8.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS1.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS9.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS9.addEventListener("click", () => {
    if(dS9.style.display != "none"){
      //nothing
    } 
    else {
        dS9.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS1.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS10.style.display = "none";
    }
  });

  BTNS10.addEventListener("click", () => {
    if(dS10.style.display != "none"){
      //nothing
    } 
    else {
        dS10.style.display = "block";
        dFP.style.display = "none";
        dCDC.style.display = "none";
        dLEF.style.display = "none";
        dS2.style.display = "none";
        dS3.style.display = "none";
        dS4.style.display = "none";
        dS1.style.display = "none";
        dS5.style.display = "none";
        dS67.style.display = "none";
        dS8.style.display = "none";
        dS9.style.display = "none";
    }
  });
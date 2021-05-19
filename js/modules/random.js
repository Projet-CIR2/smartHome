let monModule =(function() {

  return{

    rand(min, max) {
       return Math.trunc(Math.random() * (max - min) + min);
    }
  }
})();

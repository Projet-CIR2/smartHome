this.load.image('plus', '../assets/img/animation.png');
function Animation(){
  let tempo = 1000;
  for (let i = 0; i < 50; i++){
    let x = Phaser.Math.Between(0, 256);
    let y = Phaser.Math.Between(0, 512);
    let plus = this.add.image(x, y, 'plus');
    setTimeout(()=>{
      plus.remove();
    },tempo);
  }
}

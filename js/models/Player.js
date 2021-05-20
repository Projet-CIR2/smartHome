class Player  {
    constructor(scene_, x, y){
        

        let scene = scene_;
        //const idPlayer = "perso1"; //+ id.toString();
        let pos = convert([x,y]);
        //super(scene, pos[0], pos[1], 'perso1');
        //scene.add.existing(this);
        let hab = scene.physics.add.sprite(pos[0], pos[1], 'perso1');

       
    

    }

    update(){

        movePlayer2(hab, 2,11);
        
    }

    



    
}


function movePlayer2(player, x, y) {

    let speedX = 50;
    let speedY = speedX/2

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    let playerXRound = Math.round(player.x);
    let playerYRound = Math.round(player.y);

    let marge = 2;

    if (playerXRound < x-marge || playerXRound > x+marge || playerYRound < y-marge || playerYRound > y +marge) {
        
        if (playerXRound > x && playerYRound >y) {
            player.body.velocity.x -= speedX;
            player.body.velocity.y -= speedY;
            player.anims.play('left');
            lastDirection = 0;

        }
        if (playerXRound < x && playerYRound < y) {
            player.body.velocity.x += speedX;
            player.body.velocity.y += speedY
            player.anims.play('right');
            lastDirection = 1;


        }
        if (playerYRound > y && playerXRound < x) {
            player.body.velocity.y -= speedY;
            player.body.velocity.x += speedX;

            player.anims.play('up');
            lastDirection = 2;

        }
        if (playerYRound < y && playerXRound > x) {
            player.body.velocity.y += speedY;
            player.body.velocity.x -= speedX;

            player.anims.play('down');
            lastDirection = 3;

        }
    } 

    else {
        player.anims.stop();
        player.x = x;
        player.y = y;
        switch(lastDirection){
            case 0:
                player.anims.play('left');
                break;
            case 1:
                player.anims.play('right');
                break;
            case 2 :
                player.anims.play('up');
                break;
            case 3:
                player.anims.play('down');
                break;
            default:
                player.anims.play('down');
                break;
                
        }
        return 1;
    }
}


function cheminPath() {
    let x, y;
    if (destination == -1 && cheminSize >= 1) {
        destination = cheminSize-1;
        destinationInter = 0;
    }
    if (chemin != undefined && destinationInter <= destination) {
        let coords = chemin[destinationInter];
        x = coords[1];
        y = coords[0];
        
       
       let pos = convert([x,y]);
        if (movePlayer2(player,pos[0],pos[1])) {
            if (destinationInter < cheminSize) destinationInter++;
        }
    }
}




function convert([x, y]) {
    let posX = 135 +x*128 - y * 128;
    let posY = 280 + y* 64 + x*64; 

    return [posX, posY];
}

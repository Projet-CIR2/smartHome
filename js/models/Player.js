class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x_, y_, id_, perso){

        let pos = convert([x_,y_]);
        super(scene, pos[0], pos[1], perso);
        this.id = id_;
        this.pos = {
            x: y_,
            y: x_
        }
        this.destinationInter = -1;
        this.destination = -1;
    

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.sprite= perso;

        this.initAnim();
    }

    setPath(matrixMap, mapWidth, mapHeight){

        socket.emit('matrix', matrixMap, mapWidth, mapHeight, [this.pos.x,this.pos.y,10,10], this.id);
    
        socket.on('path', (path, id) => {
            if(id == this.id){
                this.chemin = path;
                this.cheminSize = path.length;
            }
          
    
        });
    }

    initAnim() {

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.sprite, { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
    
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.sprite, { start: 1, end: 1 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(this.sprite, { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(this.sprite, { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'face',
            frames: this.anims.generateFrameNumbers(this.sprite, { start: 3, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        

    }


    cheminPathPlayer() {
        let x, y;
        
        if (this.destination == -1 && this.cheminSize >= 1) {
            this.destination = this.cheminSize-1;
            this.destinationInter = 1;



        }
        
        if (this.chemin != undefined && this.destinationInter <= this.destination) {
            let coords = this.chemin[this.destinationInter];
            x = coords[1];
            y = coords[0];
            
            let pos = convert([x,y]);
            let a;
            if (a=this.movePlayer(this,pos[0],pos[1])) {
                if (this.destinationInter < this.cheminSize) this.destinationInter++;
            }
        }
       
    }
    
    

    update(){
        this.cheminPathPlayer()
    }

    movePlayer(player, x, y) {
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
            return 0;
        }
    
        else {
            player.anims.stop();
            player.x = x;
            player.y = y;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
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
    
    
    
}



function convert([x, y]) {
    let posX = 135 +x*128 - y * 128;
    let posY = 280 + y* 64 + x*64;

    return [posX, posY];
}

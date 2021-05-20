class Polygon {
    constructor(scene, xTemp, yTemp) {
        let x = xTemp;
        let y = yTemp;
        let xPos = 127 + x * 128  - y * 128;
        let yPos = 445 + y * 64  + x * 64;
        let shape = '126 0 255 66 129 127 0 63';
        let polygon = scene.add.polygon(xPos, yPos, shape/*, 0xffffff*/);

        polygon.setInteractive();
        polygon.on('pointerdown', () => {
            console.log('x', x, 'y', y);
        });
    }


}
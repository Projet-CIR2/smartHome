/*
Game.map = Game.scene.make.tilemap({ key: 'map'});
var tiles = Game.map.addTilesetImage('tiles', 'tileset');
Game.map.createStaticLayer(0, tiles, 0,0);

Game.finder = new EasyStar.js();

var grid = [];
    for(var y = 0; y < Game.map.height; y++){
        var col = [];
        for(var x = 0; x < Game.map.width; x++){
            // In each cell we store the ID of the tile, which corresponds
            // to its index in the tileset of the map ("ID" field in Tiled)
            col.push(Game.getTileID(x,y));
        }
        grid.push(col);
    }
Game.finder.setGrid(grid);

Game.getTileID = function(x,y){
    var tile = Game.map.getTileAt(x, y);
    return tile.index;
};

var tileset = Game.map.tilesets[0];
var properties = tileset.tileProperties;
var acceptableTiles = [];

for(var i = tileset.firstgid-1; i < tiles.total; i++){ // firstgid and total are fields from Tiled that indicate the range of IDs that the tiles can take in that tileset
        if(!properties.hasOwnProperty(i)) {
            // If there is no property indicated at all, it means it's a walkable tile
            acceptableTiles.push(i+1);
            continue;
        }
        if(!properties[i].collide) acceptableTiles.push(i+1);
        if(properties[i].cost) Game.finder.setTileCost(i+1, properties[i].cost); // If there is a cost attached to the tile, let's register it
    }
Game.finder.setAcceptableTiles(acceptableTiles);

var x = Game.camera.scrollX + pointer.x;
var y = Game.camera.scrollY + pointer.y;
var toX = Math.floor(x/32);
var toY = Math.floor(y/32);
var fromX = Math.floor(Game.player.x/32);
var fromY = Math.floor(Game.player.y/32);
console.log('going from ('+fromX+','+fromY+') to ('+toX+','+toY+')');

Game.finder.findPath(fromX, fromY, toX, toY, function( path ) {
    if (path === null) {
        console.warn("Path was not found.");
    } else {
        console.log(path);
        Game.moveCharacter(path);
    }
});
Game.finder.calculate();

Game.moveCharacter = function(path){
    // Sets up a list of tweens, one for each tile to walk, that will be chained by the timeline
    var tweens = [];
    for(var i = 0; i < path.length-1; i++){
        var ex = path[i+1].x;
        var ey = path[i+1].y;
        tweens.push({
            targets: Game.player,
            x: {value: ex*Game.map.tileWidth, duration: 200},
            y: {value: ey*Game.map.tileHeight, duration: 200}
        });
    }

    Game.scene.tweens.timeline({
        tweens: tweens
    });
};*/


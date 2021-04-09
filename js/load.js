function loadStart() {
	text.setText("Loading ...");
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
	//var newImage = game.add.image(game.world.centerX - 95, game.world.centerY - 95, cacheKey);
	//newImage.scale.set(0.3);
	console.log(cacheKey);
    
    //game.add.image(game.world.centerX - 95, game.world.centerY - 95, 'tempHouse');
    
    /*
    this.physics.arcade.enable(player);
    initPlayer(player);*/
}

function loadComplete() {
	text.setText("Load Complete");
}
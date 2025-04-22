/**
 * The Warzone
 * Simon Duchaine Morneau
 * 
 * Control a bomb with your voice and try to keep the city as intact as you can by avoiding the platforms. Otherwise, youu explode. Then, walk peacefully through the war ruins.
*/
"use strict";


//creates a variable for the state of the game
let gameState = "1stTitleScreen" //can be "1stTitleScreen", "1stLevel", "2ndTitleScreen" "2ndLevel" or "WinningScreen"
//creates a variable for each building image
var warzoneForegroundImage;
var warzoneBackgroundImage;
var forestForegroundImage;
var forestBackgroundImage;

/**
 * creates the canvas, load thee building images and sets the rectangle mode to center
*/
function setup() {

    //load the image of each building images
    warzoneForegroundImage = loadImage('images/1stLevel/warzone_buildings_foreground.png');
    warzoneBackgroundImage = loadImage('images/1stLevel/warzone_buildings_background.png');
    forestForegroundImage = loadImage('images/2ndLevel/forest_buildings_foreground.png');
    forestBackgroundImage = loadImage('images/2ndLevel/forest_buildings_background.png'); 

    //creates the canvas
    createCanvas(1000, 1000)

    //sets the mode so that all the x and y coordinates for rectangles and cubes determine the position of the center of the shape
    rectMode(CENTER)

}


/**
 * Either shows the 1st or 2nd Title, run the 1st or 2nd Level or show the Winning Screen depending on the state of the game
*/
function draw() {

    if (gameState === "1stTitleScreen") {
        //loads the first title screen
        firstLevelTitle();
    }else if (gameState === "2ndTitleScreen") {
       //sets the explosion counter to 0
        deathCounter = 0;
        //loads the second title screen
        secondLevelTitle();
    }else if (gameState === "1stLevel") {
        //loads the first level
        run1stLevel();
    } else if (gameState === "2ndLevel") {
        //loads the second level
        run2ndLevel();
    } else if (gameState === "gameWon") {
        //loads the winning screen
        winningScreen();
    }


}
/**
 * Runs the 1st level (Warzone)
*/
function run1stLevel() {

    background(warzoneBg.r, warzoneBg.g, warzoneBg.b);
    create1stBackgroundRectangle();
    drawSunWarzone();
    image(warzoneForegroundImage, 0, bgRec.topY); //loads the foreground building images of the first level (behind the craters)
    createPlatforms();
    drawAndMoveCraters();
    image(warzoneBackgroundImage, 0, bgRec.topY); //loads the background building images of the first level (in front of the craters)
    move1stBackground();
    createBomb();
    end1stLevel();

}

/**
 * Runs the 2nd level (The Aftermath)
*/
function run2ndLevel() {

    background(forestBg.r, forestBg.g, forestBg.b);
    drawSunForest();
    image(forestForegroundImage, 0, 0);  //loads the foreground building images of the second level (behind the craters)
    createForestWalls();
    createForestPlatforms();
    drawAndMoveCraters();
    image(forestBackgroundImage, 0, 0); //loads the background building images of the second level (in front of the craters)
    drawHero();
    moveHero();
    heroJump();
    end2ndLevel();

}


//when the keys are pressed
function keyPressed() {
    
    if (keyCode === 39) { //right arrow
        hero.direction = "right";
    } else if (keyCode === 37) { //left arrow
        hero.direction = "left";
    } else if (keyCode === 38 && keyCode === 39) { //up & right
        hero.jump.state = "active";
        hero.direction = "right";
    } else if (keyCode === 38 && keyCode === 37) { //up & left
        hero.jump.state = "active";
        hero.direction = "left";
    } else if (keyCode === 38) { //up arrow
        hero.jump.state = "active";
    } else if (keyCode === 16) { //shift key
        hero.speed.state = "fast"
    } else if 

    //Starts the game when spacebar is pressed
     (keyCode === 32 && gameState === "1stTitleScreen") { //Spacebar
        gameState = "1stLevel"
    } else if (keyCode === 32 && gameState === "1stLevel") { //Spacebar
        gameState = "2ndTitleScreen"
    } else if (keyCode === 32 && gameState === "2ndTitleScreen") { //Spacebar
        resetPlatforms();
        gameState = "2ndLevel"
    } //Starts the game when the game is won
    else if (keyCode === 32 && gameState === "2ndLevel") { //Spacebar
        gameState = "1stTitleScreen"
    } else if (keyCode === 32 && gameState === "gameWon"){ //Spacebar
        
        resetEverything();
        gameState = "1stTitleScreen"
        
    }
}

//when the keys are released
function keyReleased() {
    if (keyCode == 37 ) { //left arrow
        hero.direction = "none"
    } else if (keyCode == 39) { //right arrow
        hero.direction = "none"
    } 
    if (keyCode === 16) { //shift key
        hero.speed.state = "normal"
    }
}

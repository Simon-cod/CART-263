/**
 * The Fireball (2nd variation)
 * Simon Duchaine Morneau
 * 
 * It's now time to be the villain! Fly across the room as a fireball to kill the hero, but be careful of the deadly platforms and your dangerously increasing speed.
 */

"use strict";


//creates a variable for the state of the game
let gameState = "1stTitleScreen" //can be "titleScreen", "1stLevel", "2ndLevel" or "gameWon"

/**
 * creates the canvas and sets the rectangle mode to center
*/
function setup() {

    createCanvas(1000, 1000)

    //sets that all the x and y coordinates for rectangles and cubes determine the position of the center of the shape
    rectMode(CENTER)

}


/**
 * either shows the title, runs the game or show the ending title depending on the state of the game
*/
function draw() {

    if (gameState === "1stTitleScreen") {
        //loads the title screen
        firstTitle();
    }else if (gameState === "2ndTitleScreen") {
        //loads the game
        secondTitle();
    }else if (gameState === "1stLevel") {
        //loads the game
        run1stGame();
    } else if (gameState === "2ndLevel") {
        //loads the game
        run2ndGame();
    } else if (gameState === "gameWon") {
        //loads the game over screen
        gameWon();
    }


}
/**
 * Runs the game
*/
function run1stGame() {

    background(51)
    createBackgroundRectangle();
    drawSun();
    createPlatforms();
    moveBackground();
    createBomb();
    
}

function run2ndGame() {

    background(100, 155, 100)
    drawSun();
    createForestPlatforms()
    gameMechanics();
    drawHero();
    moveHero();
    heroJump();
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
        gameState = "2ndLevel"
    } //Starts the game when the game is won
    else if (keyCode === 32 && gameState === "2ndLevel" || gameState === "gameWon") { //Spacebar
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

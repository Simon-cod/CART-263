
//creates an object for the platfom the player need to touch to end the 2nd game
endplatform = {
    x: 960,
    y: 392.5,
    width: 40,
    height: 10,
}

/**
 * ends the first game if there are more than 20 explosions or if the player clears all the platform without exploding
*/
function end1stLevel() {

    if (deathCounter > 20 || bgRec.topY <= -2200) {
        gameState = "2ndTitleScreen"
    }
}

/**
 * regroups all the functions needed to end the second game
*/
function end2ndLevel() {
    drawEndPlatform();
    checkOverlapHeroEndPlatform();
    
}

/**
 * draws the ending platform
*/
function drawEndPlatform() {
    push;
    noStroke();
    fill (250, 250, 250);
    rect(endplatform.x, endplatform.y, endplatform.width, endplatform.height);

}

/**
 * makes you win the game if the hero touches the end platform
*/
function checkOverlapHeroEndPlatform(){


    // checking if each side of the platform overlap with the hero
    if (
       endplatform.y + endplatform.height / 2 >= hero.y - hero.h / 2 && // endplatform bottom and hero top
       endplatform.y - endplatform.height / 2 <= hero.y + hero.h / 2 &&   // endplatform top and hero bottom
       endplatform.x + endplatform.width / 2 >= hero.x - hero.w / 2 && // endplatform right and hero left
       endplatform.x - endplatform.width / 2 <= hero.x + hero.w / 2 // endplatform left and hero right 
       ){
   
        //changes the game state to winning
        winGame();
        
       }
   }

/**
 * Makes you win the game
*/
function winGame() {
    resetEverything();
    gameState = "gameWon" 
}

/**
 * resets everything for a future playthrough
*/
function resetEverything(){

//resets the hero position (for future playthrough)  
heroReset();
//empties the crater arrays (for future playthrough)
craterXs = [];
craterYs = [];
resetPlatforms();
bomb.x = bomb.originalX;
bomb.speed = bomb.initialSpeed
console.log(craterXs)
}

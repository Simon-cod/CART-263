
//creates a vraiable for the ending platform
endplatform = {
    x: 960,
    y: 377,
    width: 40,
    height: 10,
}

/**
 * regroups all the functions about the game
*/
function gameMechanics() {
    drawEndPlatform();
}

/**
 * draws the ending platforn
*/
function drawEndPlatform() {
    push;
    noStroke();
    fill (250, 250, 250);
    rect(endplatform.x, endplatform.y, endplatform.width, endplatform.height);

}

/**
 * draws the first titleScreen
*/
function firstTitle() {

    background(100, 60, 40);
    push();
    textSize(140);
    textAlign(CENTER, TOP);
    fill(0);
    text("The Warzone", width/2, 130);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0);
    text("1st level", width/2, 300);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("You move a bomb wit the volume of your voice.", width/2, 475);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Try to avoid the buildings and be mindful of your speed! ", width/2, 525);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("PRESS SPACE-BAR TO START", width/2, 850);
    pop();

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(0);
    text("Created by Simon Duchaine Morneau", width/2, 900);
    pop();

}

/**
 * draws the first titleScreen
*/
function secondTitle() {

    background(100, 155, 100);
    push();
    textSize(140);
    textAlign(CENTER, TOP);
    fill(0);
    text("The Aftermath", width/2, 130);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(0);
    text("2nd level", width/2, 300);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("You control a porcupine with the keypad.", width/2, 475);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Move peacefully through the war ruins.", width/2, 525);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("PRESS SPACE-BAR TO START", width/2, 850);
    pop();

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(0);
    text("Created by Simon Duchaine Morneau", width/2, 900);
    pop();

}

/**
 * draws the Winning Screen
*/
function gameWon() {
    
    background(100, 0, 0);
    push();
    textSize(140);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("Game Won!", width/2, height/2 - 200);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255, 200, 200);
    text("You are a true villain", width/2, 475);
    pop();


}
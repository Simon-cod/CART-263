
/**
 * draws the First Level titleScreen (Warzone)
*/
function firstLevelTitle() {

    background(warzoneBg.r, warzoneBg.g, warzoneBg.b);
    push();
    textSize(140);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text("The Warzone", width/2, 130);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(200);
    text("1st level", width/2, 300);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text("You move a bomb with the volume of your voice.", width/2, 475);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text("Try to avoid the buildings and be mindful of your speed! ", width/2, 525);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text("PRESS SPACE-BAR TO START", width/2, 850);
    pop();

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(200);
    text("Created by Simon Duchaine Morneau", width/2, 900);
    pop();

}

/**
 * draws the Second Level TtleScreen (Aftermath)
*/
function secondLevelTitle() {

    background(100, 155, 100);
    push();
    textSize(140);
    textAlign(CENTER, TOP);
    fill(255);
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
    fill(255);
    text("You control a porcupine with the keypad.", width/2, 425);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255);
    text("Move peacefully through the war ruins.", width/2, 475);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(0);
    text("Press Shift for a Speed boost", width/2, 600);
    pop();

    push();
    textSize(28);
    textAlign(CENTER, TOP);
    fill(255);
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
 * draws the Winning Screen and shows Ray Bradbury's poem
*/
function winningScreen() {
    
    background(forestBg.r, forestBg.g, forestBg.b);


    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("''There will come soft rains and the smell of the ground,", width/2, 200);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("And swallows circling with their shimmering sound;", width/2, 250);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("And frogs in the pools singing at night,", width/2, 300);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("And wild plum trees in tremulous white...", width/2, 350);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("And not one will know of the war, not one", width/2, 400);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("Will care at last when it is done.", width/2, 450);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("Not one would mind, neither bird nor tree,", width/2, 500);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("If mankind perished utterly;", width/2, 550);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("And Spring herself, when she woke at dawn", width/2, 600);
    pop();

    push();
    textSize(30);
    textAlign(CENTER, TOP);
    fill(255);
    text("Would scarcely know that we were gone.''", width/2, 650);
    pop();

    push();
    textSize(35);
    textAlign(CENTER, TOP);
    fill(0);
    text("Ray Bradbury. ''There Will Come Soft Rains''", width/2, 800);
    pop();

}
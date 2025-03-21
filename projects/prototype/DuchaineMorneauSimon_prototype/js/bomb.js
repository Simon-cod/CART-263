
//creates a variable for the bomb
let bomb = {
    x: 500,
    y: 100,
    r: 150,
    g: 150 ,
    b: 150,
    size: 30,
    originalX: 500,
    originalY: 100,
    speed: 7,
    gravity: -0.5,
    shooting: {
        initialSpeed: 3,
        speed: 3, 
        direction: "none",
        acceleration: 0.44,
    },
}

/**
 * Regroups all of the bomb functions
 */
function createBomb() {
    drawBomb();
    bombDrop();
    swayBomb();
    constrainBombInsideCanvas();
}



/**
 * Draws the bomb
 */
function drawBomb() {
    push();
    noStroke();
    fill(bomb.r, bomb.g, bomb.b),
    circle(bomb.x, bomb.y, bomb.size)
    pop();

}

/**
 * Makes the bomb sway depending on the amount of frequencies (of the microphone)
 */
function swayBomb() {


        if (bomb.shooting.direction === "none"){
        //do nothing
        } else if (bomb.shooting.direction === "right"){

        bomb.x += bomb.shooting.speed

        } else if (bomb.shooting.direction === "left"){
       bomb.x -= bomb.shooting.speed

        }
}

/**
 * Makes the initial bomb bounce
 */
function bombDrop() {
    
        bomb.speed -= bomb.gravity
        bomb.y += bomb.speed
}

/**
 * Makes the bomb reset if it goes too far outside the canvas (probably futile in this case but still we're never too precautious)
 */
function constrainBombInsideCanvas() {
    if(bomb.x < -100 || bomb.x > 2100) { //if it goes outside the canvas to the right or the left
        bombExplosion();
    } else if (bomb.y < -100 || bomb.y > 2100) { //if it goes outside the canvas up or down
        bombExplosion();
    }
}

/**
 * makes the bomb reset at the top of the canvas
 */
function bombExplosion() {
    //resets everything to it's initial state
    bomb.shooting.direction = "none"
    bomb.y = bomb.originalY;
    bomb.x = bomb.originalX;
    bomb.shooting.speed = bomb.shooting.initialSpeed
    bomb.speed = 7
}

/**
 * makes you win the game if you kill the hero!
 */
function heroDeath() {
    gameState = "gameWon"
} 

"use strict";


//Our main character
let hero = {
    startingX:40,
    startingY: 882.5,
    x: 40,
    y: 882.5,
    w: 30,
    h: 30,
    size: 30,
    width: 35,
    //the hero's speed
    speed: {
        state: "normal",
        x: 5,
    },
    //when the hero jumps
    jump: {
        state: "no",
        direction: "none",
        speed: 9,
        //variable to calculate the jump's height
        y: 0,
        //the maximum height of the jump
        maxY: 30 
    },
    deceleration: { //gravity
        y: 0.3
    },
    direction: "none", //which way is the cube going
    action: "walking", //can be walking, jumping or slashing
}

/**
 * Draws the hero
*/
function drawHero() {
    

    push();
    fill(175, 225, 175);
    noStroke();
    rect (hero.x, hero.y, hero.width, 30);
    pop();

}

/**
 * moves the hero (left to right, fast or slow)
*/
function moveHero() {

    //changes the hero speed depending on it's state
    if (hero.speed.state === "fast") {
        hero.speed.x = 7;
    } else {
        hero.speed.x = 5;
    }

    //moves the hero left to right
    if (hero.direction === "none") {
        
        hero.x = hero.x //nothing

    } else if (hero.direction === "right") {

        hero.x += hero.speed.x; //goes right

    } else if (hero.direction === "left") {

        hero.x -= hero.speed.x; //goes left
    }

    //constrains the hero to go off the canvas on the right
    if (hero.x > width - hero.size/2) {
        hero.x = width - hero.size/2 ;
    } 
    //constrains the hero to go off the canvas on the left
    else if (hero.x < 0 + hero.size/2) {
        hero.x = 0 + hero.size/2
    }

    //resets the hero if he falls off canvas
    if (hero.y > 1000) {
        hero.x = hero.startingX
        hero.y = hero.startingY
    }
}



/**
 * makes the hero jump
*/
function heroJump() {
    if (hero.jump.state === "active") {
        
        
        if (
            hero.jump.direction === "none" 
            && hero.jump.y < hero.jump.maxY
        ) { //starts the jump
            hero.jump.y += 1;
            //gravity
            hero.jump.speed -= hero.deceleration.y;
            hero.y -= hero.jump.speed;
            
    
        } else if (hero.jump.y === hero.jump.maxY) { //attains the apex of the jump 
            
            hero.jump.y -= 1
            //sets the direction of the jump to down/falling
            hero.jump.direction = "down"
        
        } else if (hero.jump.y < hero.jump.maxY && hero.jump.direction === "down" && hero.jump.y != 0) { //the hero is still falliing and has not touched the ground 

            hero.jump.y -= 1
            //gravity
            hero.jump.speed += hero.deceleration.y 
            hero.y += hero.jump.speed;
            
        } else if (hero.jump.y === 0 && hero.jump.direction === "down") {
            // Resets everything to normal
            hero.jump.speed = 9;
            hero.jump.state = "no";
            hero.jump.direction = "none";
            hero.deceleration.y = 0.3
        }       
    } 
}

/**
* What happens if the hero jumps off from a platform
*/
function jumpingOff() {

    //sets the hero to the same state than the fall of a jump
    hero.jump.y = hero.jump.maxY - 1
    hero.jump.direction = "down"
   
}

/**
* what happens if the hero falls off from a platform
*/
function fallingOff() {

    //sets the hero to the same state than the fall of a jump but with a smaller starting speed
    hero.jump.state = "active";
    hero.deceleration.y = 0.55
    hero.jump.y = hero.jump.maxY
    hero.jump.speed = 0.3
   
}


/**
 * resets the cube to it's starting position when it dies
 */
function heroDeath() {
    hero.x = 40;
    hero.y = 785;
    hero.jump.state = "no"
}

/**
 * resets the hero position to it's starting position
*/
function heroReset() {
    hero.x = hero.startingX
    hero.y = hero.startingY
}

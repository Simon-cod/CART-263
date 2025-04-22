//color for the background of the first level
let warzoneBg = {
    r: 150,
    g:100,
    b:60
}

//data for the huge background rectangle of the first level
let bgRec = {
    topX: 0,
    topY: 0,
    w: 1000,
    h: 2000,
    
}

var realX; //center X of the bg rectangle
var realY; //center Y of the bg rectangle


//Creates an array for all of the platforms
let platforms = [

    {
        x: 0,
        initialY:1975, //keep a value of the initial Y to reset the platforms later on
        y: 1975,
        width: 300,
        height: 50 
    },
    {
        x: 800,
        initialY:1975,
        y: 1975,
        width: 1050,
        height: 50 
    },
    {
        x: 250,
        initialY: 1800,
        y: 1800,
        width: 300,
        height: 30 
    },
    {
        x: 700,
        initialY: 1600,
        y: 1600,
        width: 600,
        height: 60 
    },
    {
        x: 800,
        initialY: 1460,
        y: 1460,
        width: 300,
        height: 28 
    },
    {
        x: 200,
        initialY: 1480,
        y: 1480,
        width: 100,
        height: 20 
    },
    {   
        x: 450,
        initialY: 1292,
        y: 1292,
        width: 250,
        height: 35 
    },
    {
        x: 0,
        initialY: 1360,
        y: 1360,
        width: 200,
        height: 18 
    },
    {   
        x: 100,
        initialY: 1160,
        y: 1160,
        width: 400,
        height: 25 
    },
    {   
        x: 1000,
        initialY: 1100,
        y: 1100,
        width: 550,
        height: 35 
    },
    {
        x: 150,
        initialY: 1075,
        y: 1075,
        width: 150,
        height: 15 
    },
    {   
        x: 500,
        initialY: 947,
        y: 947,
        width: 400,
        height: 35 
    },
    {
        x: 0,
        initialY: 890,
        y: 890,
        width: 200,
        height: 15 
    },
    {   
        x: 100,
        initialY: 700,
        y: 700,
        width: 450,
        height: 25 
    },
    {   
        x: 800,
        initialY: 820,
        y: 820,
        width: 450,
        height: 30 
    },
    {   
        x: 500,
        initialY: 600,
        y: 600,
        width: 100,
        height: 25 
    },
    {
        x: 180,
        initialY: 520,
        y: 520,
        width: 100,
        height: 18 
    },
    {
        x: 800,
        initialY: 405,
        y: 405,
        width: 560,
        height: 35
    },
    {
        x: 0,
        initialY: 420,
        y: 420,
        width: 247,
        height: 25
    },
    {
        x: 525,
        initialY: 300,
        y: 300,
        width: 250,
        height: 18 
    },
];

/**
 * Creates a huge background rectangle for the first level
 */
function create1stBackgroundRectangle() {

    //find the center of the bg rectangle
    firstRealX = bgRec.topX + 500
    firstRealY = bgRec.topY + 1000

    //draws the bg rectangle
    push()
    fill(warzoneBg.r, warzoneBg.g, warzoneBg.b);
    noStroke();
    rect(firstRealX, firstRealY, bgRec.w, bgRec.h);
    pop()

    //writes the number of explosions
    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text( "Explosion: " + deathCounter, 825 , bgRec.topY + 80);
    pop();

    

}

/**
 * Creates the platforms
*/
function createPlatforms() {

let counter = 0

//creates a loop with the variable platform (that changes vallues depending on the array)
for(let platform of platforms) {
    checkOverlapPlatformBomb(platform, counter);
    drawWarzonePlatform(platform);
    moveWarzonePlatform(platform);
    //keeps track of whic platform we are on
    counter += 1
}

//resets the platforms positions and the bomb values if the bomb explode
if (bomb.state === "explosion") {
    bombExplosion();
    resetPlatforms();
}
}

/**
 * draws the platforms
*/
function drawWarzonePlatform(platform) {

    push();
    fill(0, 0, 0);
    rect(platform.x, platform.y, platform.width, platform.height);
    pop();
};

/**
 * Checks if the bomb overlaps with the platforms
*/
function checkOverlapPlatformBomb(platform, counter) {

    //if each side of the platform overlap/touch the bombl, make it explode
    if (
       platform.y + platform.height / 2 >= bomb.y - bomb.h/2  && // platform bottom and bomb top
       platform.y - platform.height / 2 <= bomb.y + bomb.h/2 &&   // platform top and bomb bottom
       platform.x + platform.width / 2 >= bomb.x - bomb.w/2 && // platform right and bomb left
       platform.x - platform.width / 2 <= bomb.x + bomb.w/2 // platform1 left and bomb right 
       ){
       
        //activates the platform reset
        bomb.state = "explosion"

        //creates the bomb craters
        bombCraters(platform, counter);
        
       }
   }


/**
 * Moves the bg rectangle and the sun up
*/
function move1stBackground(){
    bgRec.topY -= bomb.speed
    sun.y -= bomb.speed
}

/**
 * Move the platforms up
*/
function moveWarzonePlatform(platform){

platform.y -= bomb.speed

}

/**
 * Resets the platform and the background to their original position
*/
function resetPlatforms(){

    //creates a new loop that goes through each platform and resets them to their initial height
    for(let eachPlatform of platforms) {
        eachPlatform.y = eachPlatform.initialY
    }

    //resets the background and the sun to their original height
    bgRec.topY = 0
    sun.y = 80
    bomb.speed = bomb.initialSpeed
}


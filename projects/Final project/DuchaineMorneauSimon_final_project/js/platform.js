let bgRec = {
    topX: 0,
    topY: 0,
    w: 1000,
    h: 2000,
    
}
let realX = undefined
let realY = undefined

function createBackgroundRectangle() {

    realX = bgRec.topX + 500
    realY = bgRec.topY + 1000

    push()
    fill(51);
    noStroke();
    rect(realX, realY, bgRec.w, bgRec.h);
    pop()

    bgRec.topY -= bomb.speed

}
//Creates an array for the platforms
let platforms = [

    {
        x: 500,
        initialY:1900,
        y: 1900,
        //the amount of blue of the platform
        b: 0,
        //the amount of red of the platform 
        r: 0,
        width: 1000,
        height: 200 
    },
    {
        x: 850,
        initialY: 1740,
        y: 1740,
        b: 0,
        r: 0,
        width: 300,
        height: 120 
    },
    {
        x: 300,
        initialY: 1600,
        y: 1600,
        b: 0,
        r: 0,
        width: 600,
        height: 60 
    },
    {
        x: 100,
        initialY: 1520,
        y: 1520,
        b: 0,
        r: 0,
        width: 200,
        height: 100 
    },
    {   
        x: 450,
        initialY: 1292,
        y: 1292,
        b: 0,
        r: 0,
        width: 250,
        height: 35 
    },
    {   
        x: 100,
        initialY: 1160,
        y: 1160,
        b: 0,
        r: 0,
        width: 400,
        height: 25 
    },
    {   
        x: 1000,
        initialY: 1100,
        y: 1100,
        b: 0,
        r: 0,
        width: 550,
        height: 35 
    },
    {   
        x: 400,
        initialY: 947,
        y: 947,
        b: 0,
        r: 0,
        width: 400,
        height: 35 
    },
    {   
        x: 900,
        initialY: 700,
        y: 700,
        b: 0,
        r: 0,
        width: 250,
        height: 35 
    },
    {
        x: 800,
        initialY: 399,
        y: 399,
        b: 0,
        r: 0,
        width: 160,
        height: 21
    },
    {
        x: 1000,
        initialY: 391.9,
        y: 391.9,
        b: 0,
        r: 0,
        width: 247,
        height: 35
    }
];

/**
 * Creates the platforms
*/
function createPlatforms() {
//creates a loop with the variable platform (that changes vallues depending on the array)



for(let platform of platforms) {
    checkOverlapPlatformBomb(platform);
    drawPlatform(platform);
    movePlatform(platform);
}
}

/**
 * Check if the bomb overlaps with the platforms
*/
function checkOverlapPlatformBomb(platform) {

    // if each side of the platform overlap/touch the fireball, resets it to it's origin position
    if (
       platform.y + platform.height / 2 >= bomb.y - bomb.size/2  && // platform bottom and bomb top
       platform.y - platform.height / 2 <= bomb.y + bomb.size/2 &&   // platform top and bomb bottom
       platform.x + platform.width / 2 >= bomb.x - bomb.size/2 && // platform right and bomb left
       platform.x - platform.width / 2 <= bomb.x + bomb.size/2 // platform1 left and bomb right 
       ){
        bombExplosion();
        resetPlatforms();
       }
       console.log(bomb.speed)
   }
// }

/**
 * draws the platforns
*/
function drawPlatform(platform) {

    push();
    fill(platform.r, 0, platform.b);
    rect(platform.x, platform.y, platform.width, platform.height);
    pop();
};

function movePlatform(platform){

platform.y -= bomb.speed

}

function resetPlatforms(){

    for(let eachPlatform of platforms) {
        eachPlatform.y = eachPlatform.initialY
    }

    bgRec.topX = 0
    bgRec.topY = 0
    sun.y = 80
}
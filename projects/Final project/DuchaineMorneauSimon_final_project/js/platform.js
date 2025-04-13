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

    
    

}
//Creates an array for the platforms
let platforms = [

    {
        x: 400,
        initialY:1900,
        y: 1900,
        //the amount of blue of the platform
        b: 0,
        //the amount of red of the platform 
        r: 0,
        width: 800,
        height: 60 
    },
    {
        x: 850,
        initialY: 1740,
        y: 1740,
        b: 0,
        r: 0,
        width: 300,
        height: 30 
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
        x: 600,
        initialY: 1460,
        y: 1460,
        b: 0,
        r: 0,
        width: 300,
        height: 28 
    },
    {
        x: 200,
        initialY: 1380,
        y: 1380,
        b: 0,
        r: 0,
        width: 100,
        height: 20 
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
        x: 850,
        initialY: 1260,
        y: 1260,
        b: 0,
        r: 0,
        width: 100,
        height: 18 
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
        x: 200,
        initialY: 840,
        y: 840,
        b: 0,
        r: 0,
        width: 200,
        height: 15 
    },
    {   
        x: 100,
        initialY: 700,
        y: 700,
        b: 0,
        r: 0,
        width: 450,
        height: 25 
    },
    {   
        x: 800,
        initialY: 800,
        y: 800,
        b: 0,
        r: 0,
        width: 450,
        height: 30 
    },
    {   
        x: 500,
        initialY: 600,
        y: 600,
        b: 0,
        r: 0,
        width: 100,
        height: 25 
    },
    {
        x: 180,
        initialY: 540,
        y: 540,
        b: 0,
        r: 0,
        width: 100,
        height: 18 
    },
    {
        x: 800,
        initialY: 415,
        y: 415,
        b: 0,
        r: 0,
        width: 560,
        height: 35
    },
    {
        x: 0,
        initialY: 392,
        y: 392,
        b: 0,
        r: 0,
        width: 247,
        height: 35
    },
    {
        x: 550,
        initialY: 280,
        y: 280,
        b: 0,
        r: 0,
        width: 250,
        height: 18 
    },
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

function moveBackground(){
    bgRec.topY -= bomb.speed
    sun.y -= bomb.speed
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
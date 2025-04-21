//color for the background of the first level
let warzoneBg = {
    r: 110,
    g:70,
    b:50
}

let bgRec = {
    topX: 0,
    topY: 0,
    w: 1000,
    h: 2000,
    
}
let realX = undefined
let realY = undefined
let craterXs = [] ;//empty array
let craterYs = []; //empty7 array
let craterNmb = -1;
let craterSizes = []; //empty array

function createBackgroundRectangle() {

    realX = bgRec.topX + 500
    realY = bgRec.topY + 1000

    push()
    fill(warzoneBg.r, warzoneBg.g, warzoneBg.b);
    noStroke();
    rect(realX, realY, bgRec.w, bgRec.h);
    pop()

    push();
    textSize(40);
    textAlign(CENTER, TOP);
    fill(200, 180, 160);
    text( "Explosion: " + deathCounter, 825 , bgRec.topY + 80);
    pop();

    

}
//Creates an array for the platforms
let platforms = [

    {
        x: 0,
        initialY:1975,
        y: 1975,
        //the amount of blue of the platform
        b: 0,
        //the amount of red of the platform 
        r: 0,
        width: 300,
        height: 50 
    },
    {
        x: 800,
        initialY:1975,
        y: 1975,
        //the amount of blue of the platform
        b: 0,
        //the amount of red of the platform 
        r: 0,
        width: 1050,
        height: 50 
    },
    {
        x: 250,
        initialY: 1800,
        y: 1800,
        b: 0,
        r: 0,
        width: 300,
        height: 30 
    },
    {
        x: 700,
        initialY: 1600,
        y: 1600,
        b: 0,
        r: 0,
        width: 600,
        height: 60 
    },
    {
        x: 800,
        initialY: 1460,
        y: 1460,
        b: 0,
        r: 0,
        width: 300,
        height: 28 
    },
    {
        x: 200,
        initialY: 1480,
        y: 1480,
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
        x: 0,
        initialY: 1360,
        y: 1360,
        b: 0,
        r: 0,
        width: 200,
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
        x: 150,
        initialY: 1075,
        y: 1075,
        b: 0,
        r: 0,
        width: 150,
        height: 15 
    },
    {   
        x: 500,
        initialY: 947,
        y: 947,
        b: 0,
        r: 0,
        width: 400,
        height: 35 
    },
    {
        x: 0,
        initialY: 890,
        y: 890,
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
        initialY: 820,
        y: 820,
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
        initialY: 520,
        y: 520,
        b: 0,
        r: 0,
        width: 100,
        height: 18 
    },
    {
        x: 800,
        initialY: 405,
        y: 405,
        b: 0,
        r: 0,
        width: 560,
        height: 35
    },
    {
        x: 0,
        initialY: 420,
        y: 420,
        b: 0,
        r: 0,
        width: 247,
        height: 25
    },
    {
        x: 525,
        initialY: 300,
        y: 300,
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

let counter = 0

for(let platform of platforms) {
    checkOverlapPlatformBomb(platform, counter);
    drawPlatform(platform);
    movePlatform(platform);
    counter += 1
}

if (bomb.state === "explosion") {
    bombExplosion();
    resetPlatforms();
}


}

function moveBackground(){
    bgRec.topY -= bomb.speed
    sun.y -= bomb.speed
}

/**
 * Check if the bomb overlaps with the platforms
*/
function checkOverlapPlatformBomb(platform, counter) {

    // if each side of the platform overlap/touch the fireball, resets it to it's origin position
    if (
       platform.y + platform.height / 2 >= bomb.y - bomb.h/2  && // platform bottom and bomb top
       platform.y - platform.height / 2 <= bomb.y + bomb.h/2 &&   // platform top and bomb bottom
       platform.x + platform.width / 2 >= bomb.x - bomb.w/2 && // platform right and bomb left
       platform.x - platform.width / 2 <= bomb.x + bomb.w/2 // platform1 left and bomb right 
       ){
       
        bomb.state = "explosion"

        
        
        bombCraters(platform, counter);
        
       }
    //    console.log(bomb.speed)
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

function bombCraters(platform, counter) {
    craterNmb += 1

    let craterX = 0

    
    let craterSize = Math.random()*45 + 30

    console.log(craterSize)

if (bomb.x >= platform.x) {

    craterX = platform.x + (bomb.x - platform.x)

} else if (bomb.x < platform.x) {

    craterX = platform.x - (platform.x - bomb.x)
}
    
    // let craterY = platform.y

    craterXs.push(craterX)
    craterYs.push(counter)

    craterSizes.push(craterSize);

    console.log(craterXs)
    console.log(craterNmb)
    console.log(craterSizes)
    
}

function moveCrater() {

    for (i=0; i < craterXs.length; i++) {

        push();
        fill(warzoneBg.r, warzoneBg.g, warzoneBg.b)
        noStroke();
        ellipse(craterXs[i], platforms[craterYs[i]].y - 20, craterSizes[i] + 35, craterSizes[i])
        pop();

    }
}

function hole() {
    //puts a hole in the platform
    push();
    fill(255)
    noStroke()
    ellipse(300, 300 + 20, 350, 350)
    pop();
    
}
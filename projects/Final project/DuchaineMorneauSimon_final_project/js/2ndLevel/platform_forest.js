//Background color for the second level
let forestBg = {
    r: 100,
    g: 155,
    b: 100
}

//Creates an array for the walls of the platforms
let walls = [ 
    {
        x: 300,
        y: 947,
        width: 8,
        height: 34.8
    },
    {
        x: 100,
        y: 890,
        width: 8,
        height: 14.8
    },
    {
        x: 578,
        y: 820,
        width: 8,
        height: 29.8
    },
    {
        x: 323,
        y: 700,
        width: 8,
        height: 24.5
    },
    {
        x: 548,
        y: 600,
        width: 8,
        height: 24.5
       },
    {
        x: 452,
        y: 600,
        width: 8,
        height: 24.5
    },
    {
        x: 228,
        y: 520,
        width: 8,
        height: 17.5 
    },
    {
        x: 518,
        y: 405,
        width: 8,
        height: 34.5 
    },
    {
        x: 122.5,
        y: 420,
        width: 8,
        height: 24.5 
    },
    {
        x: 398,
        y: 300,
        width: 8,
        height: 17.5
    },
    {
        x: 648,
        y: 300,
        width: 8,
        height: 17.5
    }
]

/**
 * Creates the platforms
*/
function createForestPlatforms() {
//creates a loop with the variable platform (that changes values depending on the array)    
for(let platform of platforms) {
    checkOverlapPlatformHero(platform);
    drawForestPlatform(platform);
}
}

/**
 * Create the walls
*/
function createForestWalls() {
    //creates a loop with the variable wall (that changes vallues depending on the array)
    for( let wall of walls) {
        checkOverlapWallHero(wall)
        drawWall(wall)
    }
}

/**
* draws the platforms
*/
function drawForestPlatform(platform) {

    push();
    fill(0);
    rect(platform.x, platform.y, platform.width, platform.height);
    pop();
};

/**
 * draws the walls
*/
function drawWall(wall) {
    push();
    fill(0);
    rect(wall.x, wall.y, wall.width, wall.height);
    pop()
}

/**
 * Check if the hero overlaps with the platforms
*/
function checkOverlapPlatformHero(platform) {
    
    // if each side of the platform overlap/touch
    if (
       platform.y + platform.height / 2 >= hero.y - hero.h / 2 && // platform bottom and hero top
       platform.y - platform.height / 2 <= hero.y + hero.h / 2 &&   // platform top and hero bottom
       platform.x + platform.width / 2 >= hero.x - hero.w / 2 && // platform right and hero left
       platform.x - platform.width / 2 <= hero.x + hero.w / 2 // platform1 left and hero right 
       ){

        //resets to the noraml values
        hero.jump.y = 0;
        hero.jump.speed = 9;
        //sets the hero.y to the top of the platform
        hero.y = platform.y - platform.height/2 - hero.size/2;
       } 
      
       else if (hero.y === platform.y - platform.height/2 - hero.size/2 && hero.jump.state === "active"){  //if the hero jumps off the platform

      jumpingOff();
    
   } else if (hero.y === platform.y - platform.height/2 - hero.size/2 && hero.jump.state !== "active"){   //if the hero falls off the platform
        
    fallingOff();
    
   } 
   }

  /**
  * Check if the hero overlaps with the walls of the platforms
  */
   function checkOverlapWallHero(wall) {
    
    //if the hero is at the right of the wall
    if (hero.x > wall.x) {

         // checking if each side of the platforms overlap with the hero
        if (
       wall.y + wall.height / 2 >= hero.y - hero.h / 2 && // wall bottom and hero top
       wall.y - wall.height / 2 <= hero.y + hero.h / 2 &&   // wall top and hero bottom
       wall.x + wall.width / 2 >= hero.x - hero.w / 2 && // wall right and hero left
       wall.x - wall.width / 2 <= hero.x + hero.w / 2 // wall left and hero right 
       ){
           //sets the hero outside of the wall 
           hero.x = wall.x + wall.width/2 + hero.width/2;
           
           if (hero.jump.state === "active"){ //if the hero is jumping while touching the wall, call jumpingOff()

            jumpingOff();

        }
       } 
   
    } else if (hero.x < wall.x) {  //if the hero is at the left of the wall

        // checking if each side of the platforms overlap with the hero
        if (
            wall.y + wall.height / 2 >= hero.y - hero.h / 2 && // wall bottom and hero top
            wall.y - wall.height / 2 <= hero.y + hero.h / 2 &&   // wall top and hero bottom
            wall.x + wall.width / 2 >= hero.x - hero.w / 2 && // wall right and hero left
            wall.x - wall.width / 2 <= hero.x + hero.w / 2 // wall left and hero right 
            ){

                //sets the hero outside of the wall
                hero.x = wall.x - wall.width/2 - hero.width/2;

                if (hero.jump.state === "active"){ //if the hero is jumping while touching the wall, call jumpingOff()

                    jumpingOff();
                }
               
            }  
    }
   }
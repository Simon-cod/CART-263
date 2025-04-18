//Background color for the second level
let forestBg = {
    r: 100,
    g: 155,
    b: 100
}


//Creates an array for the walls of the rectangles/ground/platform
let walls = [ 
    {
        x: 300,
        y: 947,
        //the amount of green of the walls
        g: 100,
        width: 8,
        height: 34.8
    },
    {
        x: 100,
        y: 890,
        //the amount of green of the walls
        g: 100,
        width: 8,
        height: 14.8
    },
    // {
    //     x: 300,
    //     y: 890,
    //     //the amount of green of the walls
    //     g: 100,
    //     width: 8,
    //     height: 56
    // },
    {
        x: 578,
        y: 820,
        //the amount of green of the walls
        g: 100,
        width: 8,
        height: 29.8
    },
    {
        x: 323,
        y: 700,
        //the amount of green of the walls
        g: 100,
        width: 8,
        height: 24.5
    },
    {
        x: 548,
        y: 600,
        g: 100,
        width: 8,
        height: 24.5
       },
    {
     x: 452,
     y: 600,
     g: 100,
     width: 8,
     height: 24.5
    },
    {
        x: 228,
        y: 520,
        g: 100,
        width: 8,
        height: 17.5 
    },
    {
        x: 518,
        y: 405,
        g: 100,
        width: 8,
        height: 34.5 
    },
    {
     x: 122.5,
     y: 420,
     g: 100,
     width: 8,
     height: 24.5 
    },
    {
        x: 398,
        y: 300,
        g: 100,
        width: 8,
        height: 17.5
    },
    {
        x: 648,
        y: 300,
        g: 100,
        width: 8,
        height: 17.5
    }
   
]


/**
 * Creates the platforms
*/
function createForestPlatforms() {
//creates a loop with the variable platform (that changes vallues depending on the array)
    resetPlatforms();    
for(let platform of platforms) {
    checkOverlapPlatformHero(platform);
    drawPlatform(platform);
}
}

/**
 * Creates the walls
*/
function createForestWalls() {
    //creates a loop with the variable wall (that changes vallues depending on the array)
    for( let wall of walls) {
        checkOverlapWallHero(wall)
        drawWall(wall)
    }
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

        //colors of the platform change (it becomes blue)
        // platform.b = 255;
        // platform.r = 0;

        //resets to the noraml values
        hero.jump.y = 0;
        hero.jump.speed = 9;
        //sets the hero.y to the top of the platform
        hero.y = platform.y - platform.height/2 - hero.size/2;
       } 
       //if the hero jumps off the platform
       else if (hero.y === platform.y - platform.height/2 - hero.size/2 && hero.jump.state === "active"){
      jumpingOff();
      //the color of the platform becomes red
    //   platform.b = 0;
    //   platform.r = 255;
      
      //if the hero falls off the platform
   } else if (hero.y === platform.y - platform.height/2 - hero.size/2 && hero.jump.state !== "active"){
        fallingOff();
        //the color of the platforms becomes pink
        // platform.b = 255;
        // platform.r = 255;
   } else { //if the hero is not on the platform
    //the platform becomes black
    platform.b = 0;
    platform.r = 0;
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
       wall.y + wall.height / 2 >= hero.y - hero.h / 2 && // rect1 bottom and hero top
       wall.y - wall.height / 2 <= hero.y + hero.h / 2 &&   // rect1 top and hero bottom
       wall.x + wall.width / 2 >= hero.x - hero.w / 2 && // rect1 right and hero left
       wall.x - wall.width / 2 <= hero.x + hero.w / 2 // rect1 left and hero right 
       ){
        // changes the color of the wall to green
        //    wall.g = 200;
           //sets the hero outside of the wall 
           hero.x = wall.x + wall.width/2 + hero.width/2;
           
           //if the hero is jumping while touching the wall, call jumpingOff()
           if (hero.jump.state === "active"){
            jumpingOff();
        }

       }  else { //if the hero does not touch the wall
        //the wall colors becomes black
        wall.g = 0
       }

    //if the hero is at the left of the wall
    } else if (hero.x < wall.x) {

        // checking if each side of the platforms overlap with the hero
        if (
            wall.y + wall.height / 2 >= hero.y - hero.h / 2 && // rect1 bottom and hero top
            wall.y - wall.height / 2 <= hero.y + hero.h / 2 &&   // rect1 top and hero bottom
            wall.x + wall.width / 2 >= hero.x - hero.w / 2 && // rect1 right and hero left
            wall.x - wall.width / 2 <= hero.x + hero.w / 2 // rect1 left and hero right 
            ){

                //changes the color of the wall to green
                // wall.g = 200;
                //sets the hero outside of the wall
                hero.x = wall.x - wall.width/2 - hero.width/2;

                //if the hero is jumping while touching the wall, call jumpingOff()
                if (hero.jump.state === "active"){
                    jumpingOff();
                }
               
            }  else {  //if the hero does not touch the wall
                //the wall colors becomes black
             wall.g = 0
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
    * what happens if a hero falls off from a platform
    */
function fallingOff() {
    //sets the hero to the same state than the fall of a jump but with a smaller starting speed
    hero.jump.state = "active";
    hero.deceleration.y = 0.55
    hero.jump.y = hero.jump.maxY
    hero.jump.speed = 0.3
   
}
   /**
 * draws the platforns
*/
function drawPlatform(platform) {

    push();
    fill(platform.r, 0, platform.b);
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
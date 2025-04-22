//creates variable for the crater color
var warzoneCraterColor;

/**
 * Take the position and size of the bomb crater
 */
function bombCraters(platform, counter) {

    // craterNmb += 1

    let craterX = 0

    //random size
    let craterSize = Math.random()*35 + 60

    console.log(craterSize)

    //calculates the position of bomb.x in relation to platform.x
if (bomb.x >= platform.x) {

    craterX = platform.x + (bomb.x - platform.x)

} else if (bomb.x < platform.x) {

    craterX = platform.x - (platform.x - bomb.x)
}
    

//push the information of the crater to specific arrays
    craterXs.push(craterX)
    craterYs.push(counter)
    craterSizes.push(craterSize);

    console.log(craterXs)
    console.log(craterNmb)
    console.log(craterSizes)
    
}

/**
 * Draws the crater and make them move with the background
 */
function moveCrater() {

warzoneCraterColor = color(warzoneBg.r, warzoneBg.g, warzoneBg.b)

//reduce slightly the opacity of the craters colors
warzoneCraterColor.setAlpha(200)

//loop through all of the craters in the carterXs array and draws them
    for (i=0; i < craterXs.length; i++) {

        push();
        fill(warzoneCraterColor)
        noStroke();
        circle(craterXs[i], platforms[craterYs[i]].y - 20, craterSizes[i])
        pop();

    }
}
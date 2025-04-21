let warzoneCraterColor = undefined

function bombCraters(platform, counter) {
    craterNmb += 1

    let craterX = 0

    
    let craterSize = Math.random()*35 + 60

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

warzoneCraterColor = color(warzoneBg.r, warzoneBg.g, warzoneBg.b)

warzoneCraterColor.setAlpha(200)

    for (i=0; i < craterXs.length; i++) {

        push();
        fill(warzoneCraterColor)
        noStroke();
        circle(craterXs[i], platforms[craterYs[i]].y - 20, craterSizes[i])
        pop();

    }
}
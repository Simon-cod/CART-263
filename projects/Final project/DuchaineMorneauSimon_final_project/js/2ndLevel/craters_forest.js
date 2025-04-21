let forestCraterColor = undefined

function drawForestCraters() {

    forestCraterColor = color(forestBg.r, forestBg.g, forestBg.b)

    //makes the crater color slightly transparent so that the platform can still be seen under it (to be able to play normally)
    forestCraterColor.setAlpha(200);

    for (i=0; i < craterXs.length; i++) {

        push();
        fill(forestCraterColor)
        noStroke();
        ellipse(craterXs[i], platforms[craterYs[i]].y - 20, craterSizes[i])
        pop();

    }
}

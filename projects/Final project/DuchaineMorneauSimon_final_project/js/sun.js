
//Creates a variable for the sun
let sun = {
    x: 200,
    y: 80,
    size: 220,
    //colors of the sun
    warzone: {
    r: 200,
    g: 180,
    b: 160
    },
    forest: {
    r: 200,
    g: 255,
    b: 200
    }
}

/**
 * Draws the Sun for the first level
 */
function drawSunWarzone() {
    push();
    noStroke();
    fill(sun.warzone.r, sun.warzone.g, sun.warzone.b);
    circle(sun.x, sun.y, sun.size);
    pop();
}

/**
 * Draws the Sun for the first level
 */
function drawSunForest() {
    push();
    noStroke();
    fill(sun.forest.r, sun.forest.g, sun.forest.b);
    circle(sun.x, sun.y, sun.size);
    pop();
}

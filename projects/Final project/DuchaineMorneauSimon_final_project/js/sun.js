
//Creates a variable for the sun
let sun = {
    x: 200,
    y: 80,
    size: 220,
    r: 200,
    g: 180,
    b: 160,
}

/**
 * Draws the Sun for the first level
 */
function drawSunWarzone() {
    push();
    noStroke();
    fill(sun.r, sun.g, sun.b);
    circle(sun.x, sun.y, sun.size);
    pop();
}

/**
 * Draws the Sun for the first level
 */
function drawSunForest() {
    push();
    noStroke();
    fill(200, 255, 200);
    circle(sun.x, sun.y, sun.size);
    pop();
}

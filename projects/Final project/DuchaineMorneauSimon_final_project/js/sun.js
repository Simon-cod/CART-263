
//Creates a variable for the sun
let sun = {
    x: 200,
    y: 80,
    size: 220,
    r: 200,
    g: 200,
    b: 200,
}

/**
 * Draws the Sun
 */
function drawSun() {
    push();
    noStroke();
    fill(sun.r, sun.g, sun.b);
    circle(sun.x, sun.y, sun.size);
    pop();
}
"use strict";

let x1 = 50;
let x2 = 200;
let x3 = 500;
let y1 = 50;
let y2 = 50;
let y3 = 50;
let w = 100;
let r1 = 50;
let r2 = 50;
let r3 = 200;
let g1 = 0;
let g2 = 150;
let g3 = 0;
let b1 = 200;
let b2 = 200;
let b3 = 200;

function setup() {
    console.log("go")

createCanvas(1000, 1000)

}

function draw() {



background(0);

drawSquares();

movingSquare();


}

function drawSquares() {

fill(r1, g1, b1)
square(x1, y1, w)

fill(r2 , g2, b2)
square(x2, y2, w)

fill(r3, g3, b3)
square(x3, y3, w)

}

function movingSquare() {

    
    if (y3 <= 1000) {
        y3 += 5;  
    }   
    else if (y3 >= 1000) {
        y3 = 0;
    }

    r3 = map(mouseX, 0, 1000, 0, 255)

    b3 = map(mouseY, 0, 1000, 0, 255)
    
}

function mouseClicked() {
    x1 += 50
    y1 += 50
}

function keyPressed() {

if (keyCode === 32) {

        x2 += 25
}

}
"use strict";

let x = 50;
let y = 50;
let w = 50;
let h = 60;
let r = 100;
let g = 0;
let b = 200;

function setup() {
    console.log("go")

createCanvas(1000, 1000)

}

function draw() {

background(0);  

drawEllipse()

x += 145;
y += 245;
w += 45;
h += 45;

r += 165;
g += 15;
b += 45;

drawEllipse()

x += 145;
y += 245;
w += 45;
h += 45;

r += 25;
g += 0;
b += 15;


drawEllipse()

x = 50;
y = 50;
w = 50;
h = 60;
r = 100;
g = 0;
b = 200;

}

function drawEllipse() {
fill(r,g,b)    
ellipse(x, y, w, h)

}
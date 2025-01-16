"use strict";

let x = 50;
let y = 50;
let w = 50;
let h = 60;
let r = 50;
let g = 25;
let b = 50;

function setup() {
    console.log("go")

createCanvas(1000, 1000)

}

function draw() {

background(0);  

fill(r,g,b)    
ellipse(x, y, w, h)

x += 145;
y += 245;
w += 45;
h += 45;

r += 65;
g += 15;
b += 45;

fill(r,g,b)    
ellipse(x, y, w, h)

x += 145;
y += 245;
w += 45;
h += 45;

r += 25;
g += 0;
b += 15;


fill(r,g,b)    
ellipse(x, y, w, h)

x = 50;
y = 50;
w = 50;
h = 60;
r = 50;
g = 100;
b = 50;

}

function drawEllipse() {

    
}
let x
let y
let d=50
let xf=d
let yf=d
let xspeed=5
let yspeed=2

function setup(){
    createCanvas(400,400)
    strokeWeight(2)
    frameRate(2)
    x = random(50, 900)
    y = random(50, 900)
}

function fiorellino(x, y, d){
    fill(255, 190, 0)
    circle(x+d/2, y-d/2, d)
    circle(x-d/2, y+d/2, d)
    circle(x-d/2, y-d/2, d)
    circle(x+d/2, y+d/2, d)
    fill(255, 120, 0)
    circle(x, y, d)
}

function draw(){
    background(0, 255, 51)
    fiorellino(x, y, d)
    x += xspeed
    y += yspeed
    if(x>400-d || x<d){
        xspeed = -xspeed
    }
    if(y>400-d || y<d){
        yspeed = -yspeed
    }
}

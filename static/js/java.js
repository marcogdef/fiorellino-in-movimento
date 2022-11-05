let x
let y
let d=50
let xf=d
let yf=d
let xmov=5
let ymov=2

function setup(){
    createCanvas(1000,1000)
    strokeWeight(2)
    frameRate(6)
    x = random(50, 900)
    y = random(50, 900)
}

function draw(){
    background(0, 255, 51)
    fiorellino(x, y, d)
    x += xmov;
    y += ymov;
    if(x>1000-d || x<d){
        xmov = -xmov
    }
    if(y>1000-d || y<d){
        ymov = -ymov
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
}

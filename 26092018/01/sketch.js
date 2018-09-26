const arrayCircle = [];

function setup() {
    createCanvas(400, 400);
    background(255);

    for (let y = 0; y < 150; y++) {

        const objectCircle = {
            x: null,
            y: null,
            radius: null,
            colorR:null,
            colorG:null,
            colorB:null
        }

        objectCircle.x = Math.floor((Math.random() * 350) + 20);
        objectCircle.y = Math.floor((Math.random() * 350) + 20);
        objectCircle.radius = Math.floor((Math.random() * 80) + 1);
        objectCircle.colorR = Math.floor((Math.random() * 255) + 1);
        objectCircle.colorG = Math.floor((Math.random() * 255) + 1);
        objectCircle.colorB = Math.floor((Math.random() * 255) + 1);
        arrayCircle.push(objectCircle);
    }
    console.log(arrayCircle);
}
function draw() {
    for (let i = 0; i < arrayCircle.length; i++) {
        fill(arrayCircle[i].colorR,arrayCircle[i].colorG,arrayCircle[i].colorB);
        ellipse(arrayCircle[i].x, arrayCircle[i].y, arrayCircle[i].radius, arrayCircle[i].radius);
    }
    console.log('Ho finito!');
    noLoop();
}
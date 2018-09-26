const arrayCircle = [];

function setup() {
    createCanvas(400, 400);
    background(0);

    for (let y = 0; y < 6; y++) {

        const objectCircle = {
            x: null,
            y: null,
            radius: null
        }

        objectCircle.x = Math.floor((Math.random() * 300) + 1);
        objectCircle.y = Math.floor((Math.random() * 300) + 1);
        objectCircle.radius = Math.floor((Math.random() * 80) + 1);
        arrayCircle.push(objectCircle);
    }
    console.log(arrayCircle);
}
function draw() {
    for (let i = 0; i < arrayCircle.length; i++) {
        ellipse(arrayCircle[i].x, arrayCircle[i].y, arrayCircle[i].radius, arrayCircle[i].radius);
    }
}
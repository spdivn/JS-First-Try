// # Refactoring
// Usando closure e function factory, creare 3 funzioni:

// ```javascript
// createSmallCircle()
// createMediumCircle()
// createBigCircle()
// ```

// Una function factory che ritorna delle funzioni
// + Ognuna dalle funzioni utilizzata ellipse() per creare cerchi con caratteristiche diverse :
// ```javascript
// {
//     x: Number,
//     y: Number,
//     radius: Number 
// }


// const createSmallCircle = functionFactory(.....);
// const createMediumCircle = functionFactory(.....);
// const createBigCircle = functionFactory(.....);
// ```
function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
}


function factory(x, y, r) {
    let X=x;
    let Y=y;
    let R=r;
    function genera() {
        fill(255);
        ellipse(X, Y, R,R);
    }
    return genera;
}



function draw() {
    const createSmallCircle = factory(100, 100, 20);
    const createMediumCircle = factory(200, 200, 40);
    const createBigCircle = factory(250, 250, 60);
    translate(width / 2, height / 2);
    createSmallCircle();
    createMediumCircle();
    createBigCircle();
    noLoop();

}
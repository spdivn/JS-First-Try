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
    createCanvas(500, 500);
    background(0);
}


function factory(r) {
    let R=r;
    function genera(X,Y) {
        fill(255);
        ellipse(X, Y, R,R);
    }
    return genera;
}

const createSmallCircle = factory(20);
const createMediumCircle = factory(40);
const createBigCircle = factory(60);

function draw() {
    createSmallCircle(150,150);
    createMediumCircle(200,200);
    createBigCircle(400,400);
    createBigCircle(100,100);
    noLoop();
}
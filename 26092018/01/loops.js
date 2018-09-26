//while loop
let x = 0;

console.log('X è uguale a ' + x);

x = x + 50;


    //Controllo in testa
    while (x <= 200) {
        console.log('X è uguale a ' + x);

        x = x + 50;
    }
    x = 0;

    //Controllo in coda
    do {
        console.log('X è uguale a ' + x);

        x = x + 50;
    }
    while (x <= 200);

//for loop

for (let y = 0; y <= 200; y = y + 50) {
    console.log('Y è uguale a ' + y);
}

const fruits= ['banana', 'apple','peach','melon'];

//Ciclo normale
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Ciclo inverso
for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}
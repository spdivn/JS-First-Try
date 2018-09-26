//Array
const arrayExample = [12,56,95,24];

const firstNumeber = arrayExample[0];

//Oggetto 
const objectExample = {
    color:'red',
    size: 23,
    talk: function(){
        console.log('Hello world!');
    }
    //,
    // talk2(){
    //     console.log('Hello world!');
    // }
};

const color = objectExample.color; //Leggo proprietà color dall'oggetto objectExample

objectExample.talk();  //Richiamo il metodo dell'oggetto

console.log(arrayExample.length); //Lunghezza dell'array 

console.log(arrayExample);//Stampa l'intero array

console.log(Math.random());//Genera un numero casuale tra 0 e 1 

const random = Math.floor(Math.random());//Arrotonda per difetto

const random2 = Math.floor(Math.random()*100);//Genera un numero casuale tra 0 e 100 
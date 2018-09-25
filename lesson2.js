/**
 * Variables and types
 */
var prodotto;
var nomeProdotto;
var prezzoProdotto;
var quantitaProdotto;
var vendibilitaProdotto;
var attributiProdotto = null;

// Abbiamo appena definito una serie di variabili che assumeranno valore "undefined" e tipo per le prime 5 mentre l'utilima assume valore e tipo "null"
// Questi sono le uniche tipologie di variabile che oltre ad essere il tipo è anche il valore. 

nomeProdotto = "Fotografia";
prezzoProdotto = 59.99;
quantitaProdotto = 10;

// Javascript non essendo un linguaggio di programmazione tipizzato non ha ncessità di altro per dichiarare una variabile.

/**
 * abbiamo appena definito tre variabili
 * 
 * una è una stringa
 * le altre sono di tipo numerico
 *      In javascript non è nessuna differenza tra numero intero, decimale o qualsiasi altro 
 * 
 * Altri tipi di variabile
 */
/*  Tipi
    Stringa Numero       
    Booleno 
    Array
    Oggetti
    Funzioni
*/
vendibilitaProdotto = true; // Boolean - può assumere valore true o false
attributiProdotto = {}; // oggetti
categorieProdotto = []; // array
assegnaTagProdotto = function(){}; // function

// Tutte le variabili che abbiamo dichiarato fino ad ora sono state dichiarate con lo statement "var"
// Oltre a questo statement ne esistono altri ed in particolare 

const PercentualeTassazione = 5; // costante
let contatoreInterno = 0;        // particolare tipologia di "var"
// Entrambe proprio come var hanno varia tipologie di variabile che sono le stesse.


//Block statemant
/* 
{
    Funzioni e variabili
    se dichiariamo la variabile muore al difuori di essa
}

const è costante
ma se un array si limita solo nell oggetto e non nelle variabili interne 

var si aggangia alla funzione piu vicina o meglio superiore
for (var i=0; i<255;i++){

}
i mantiene il valore e continua a vivere al di fuori del for



let si aggangia al blocco
for (let i=0; i<255;i++){

}
i non esiste e muore nel blocco del for
*/
/**
 * Data la serie di variabili di seguito ricavare 
 *   A) Il prezzo totale del prodotto finale (Bundle Product)
 *   B) Il prezzo totale con le tasse incluse
 *   C) Il prezzo totale con le spese di spedizione
 * 
 * Inoltre controllare se
 *   1) Avete i soldi necessari per poter pagare (fate riferimento a money_in_the_poket)
 *   2) Se ci sono tutti i pezzi nel magazzino
 */

// Costants
const TAX_PERCENT = 21;
const CURRENCY = "€";
const Component_1 = "Mouse";
const Component_2 = "Keyboard";
const Component_3 = "Monitor";
const Component_4 = "Cable";
const Component_5 = "Case and Hardware";

// Variables
var money_in_the_poket = 5000;

var BundleProductName = "Personal Computer (Desktop)";

//Oggetti del bundle
var BundleProduct = Component_1 + Component_2 + Component_3 + (4 * Component_4) + Component_5;

//Prezzi singoli componenti
let PriceComponent_1 = 10;
let PriceComponent_2 = 20;
let PriceComponent_3 = 80;
let PriceComponent_4 = 4.50;
let PriceComponent_5 = 1000;

//Costo del bundle 
var BundleProductPrice = PriceComponent_1 + PriceComponent_2 + PriceComponent_3 + (4 * PriceComponent_4) + PriceComponent_5;

//Totale pezzi del bundle
var BundleProductPiece = 8;

//Costo del bundle con le tasse
var BundleProductPriceWithTax = (BundleProductPrice * (21 / 100)) + BundleProductPrice;
BundleProductPriceWithTax.toFixed(2);

//Costo del bundle con le tasse e le spese di spedizione
var BundleProductPriceWithShipment = (BundleProductPriceWithTax <= 99) ? BundleProductPriceWithTax + 10 : BundleProductPriceWithTax;

//Componenti in magazzino
let QuantityComponent_1 = 1;
let QuantityComponent_2 = 1;
let QuantityComponent_3 = 1;
let QuantityComponent_4 = 1;
let QuantityComponent_5 = 2;

var Puoi_Pagare = 0;

//Funzione per controllo in magazzino
function mancano(QuantityComponent, totaleNecessario, componente) {
    if (QuantityComponent >= totaleNecessario) {
        console.log(componente + " è in magazzino");
        Puoi_Pagare++;
    } else {
        console.log(componente + " non è in magazzino");
    }
}

//Stampa dei vari prezzi
console.log(BundleProductPrice + CURRENCY);
console.log(BundleProductPriceWithTax + CURRENCY + " con tasse");
console.log(BundleProductPriceWithShipment + CURRENCY + " con spedizione");

//Controllo componenti in magazzino tramite funzione
mancano(QuantityComponent_1, 1, Component_1);
mancano(QuantityComponent_2, 1, Component_2);
mancano(QuantityComponent_3, 1, Component_3);
mancano(QuantityComponent_4, 2, Component_4);
mancano(QuantityComponent_5, 2, Component_5);

//Controllo se il cliente può pagare il totale 
if (Puoi_Pagare >= BundleProductPiece) {
    if (BundleProductPriceWithTax <= money_in_the_poket) {
        console.log("Puoi pagare");
    } else {
        console.log("Ti attacchi");
    }
} else {
    console.log("Ci scusiamo per il disagio ma non ci sono tutti i pezzi del bundle in magazzino!");
}


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
const TAX_PERCENT   = 21;
const CURRENCY      = "€";
const Component_1   = "Mouse";
const Component_2   = "Keyboard";
const Component_3   = "Monitor";
const Component_4   = "Cable";

// Variables
var money_in_the_poket  = 5000;

var BundleProductName   = "Personal Computer (Desktop)";
var BundleProduct       = Component_1 + Component_2 + Component_3 + (4 * Component_4) + Component_5;

let PriceComponent_1    = 10;
let PriceComponent_2    = 20;
let PriceComponent_3    = 80;
let PriceComponent_4    = 4.50;

let QuantityComponent_1 = 1;
let QuantityComponent_2 = 1;
let QuantityComponent_3 = 1;
let QuantityComponent_4 = 1;

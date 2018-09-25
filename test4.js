/* creazione minigioco */

/* Titolo: blackJack JS - EASY
 * Descrizione: Creazione di blackJack in javascript
 * Regole del blackJack: 
 *    STEP 1: 
 *          il banchiere gira 2 (non un valore indefinito) carte e somma i loro valori con limite di 15.
 *          Se la somma supera il 15 (non 21), il valore è 0.
 *    STEP 2: 
 *          il player gira 2 carte e somma i loro valori con limite di 15.
 *          Se la somma supera il 15 (non 21), il valore è 0.
 *    STEP 3:
 *          Controllo vincitore, chi ha ottenuto il valore più vicino a 15 è il vincitore.
 *          Se il banchiere e il player hanno lo stesso risultato, vince il banchiere 
 *
 */

// Check vicintore
function Maggiore(banchiere, player) {

    if (banchiere > player || banchiere == player) {
        console.log("Il banchiere vince!");
    } else {
        console.log("Il player vince!");
    }
}


// Check se la somma va oltre la soglia prevista 
function over15(sumCard) {
    if (sumCard > 15) {
        return 0;
    } else {
        return sumCard;
    }
}

// Generazione somma carte con funzione 
// numCard = numero totali delle carte da generare
// Totale = variabile d'appoggio dove mettere la somma

function genCard(numCard, totale) {
    for (var i = 0; i < numCard; i++) {
        if (totale == 0) {
            totale = Math.floor((Math.random() * 15) + 1);
        } else {
            totale = totale + Math.floor((Math.random() * 15) + 1);
        }
    }
}

//Instaza somma carte
var carteBanchiere = 0;
var cartePlayer = 0;

//Generazione somma carte tramite funzioni
cartePlayer = genCard(2, cartePlayer);

//Check over 15
cartePlayer = over15(cartePlayer);

//Generazione somma carte tramite funzioni
 genCard(2, carteBanchiere);

//Check over 15
carteBanchiere = over15(carteBanchiere);

//Stampa della somma delle carte del banchiere
console.log("La somma delle due carte del banchiere è " + carteBanchiere);

//Stampa della somma delle carte del player
console.log("La somma delle due carte del player è " + cartePlayer);

// Check vicintore
Maggiore(carteBanchiere,cartePlayer);
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


/**
 * Check se la somma va oltre la soglia prevista 
 * 
 * @param {number} sumCard 
 */
function over15(sumCard) {
    if (sumCard > 15) {
        return 0;
    } else {
        return sumCard;
    }
};


/**
 * Check the winner of game!
 * 
 * @param {number} dealer 
 * @param {number} player 
 */
function majorSum(dealer, player) {
    if (dealer >= player) {
        console.log("Dealer wins!");
    } else {
        console.log("Player wins!");
    }
};


/**
 * Generazione somma carte con funzione 
 * numCard = numero totali delle carte da generare
 * Totale = variabile d'appoggio dove mettere la somma
 * 
 * 
 * @param {number} numCard 
 * @param {number} total 
 */
function genCard(numCard, total) {
    for (var i = 0; i < numCard; i++) {
        if (total == 0) {
            total = Math.floor((Math.random() * 15) + 1);
        } else {
            total = total + Math.floor((Math.random() * 15) + 1);
        }
    }
    //Check over 15
    return over15(total);
};



//Generazione somma carte tramite funzioni
var playerCard = genCard(2, 0);
var dealerCard = genCard(2, 0);


//Stampa della somma delle carte del dealer
console.log("The sum of dealer cards is " + dealerCard);


//Stampa della somma delle carte del player
console.log("The sum of player cards is" + playerCard);


// Check vicintore
majorSum(dealerCard, playerCard);
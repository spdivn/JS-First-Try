// Operationi con le variabili
// come per le operazioni con valori e come visto all'inizio di questa lezione basta utilizzare gli operandi tra le variabili per effettuare delle operazioni 
// (math expression)

const incrementoPrezzoProdotto = 1.2;
prezzoProdotto = prezzoProdotto * incrementoPrezzoProdotto; // moltiplicazione tra variabili di tipo "number"

var prezzoConMoneta = prezzoProdotto + "€"; // addizione tra numero e stringa

var nomeProdotto2 = nomeProdotto + " e Quadretto"; // addizione tra variabili di tipo "stringa"
var prezzoProdotto2 = prezzoProdotto + 50;
var prezzoConMoneta2 = prezzoProdotto2 + "€";

// console.log
// Console.log è una funzione comune di javascript, presente sia lato server che browser per scrivere nella console 
// variabili o valori di qualsisi tipo essi siano.
console.log(nomeProdotto);
console.log("CIAO");
console.log(2);
console.log({});

// "if" "else if" "else" "ternary"
// Sono 4 statement utilizzati per il controllo del flusso dei dati

if (prezzoProdotto2 < 50) {
    console.log('Giorgio dice: "Non lo voglio costa troppo poco per me."');
} else if (prezzoProdotto >= 100) {
    console.log('Ivan dice: "Massi dai prendo solo la "' + nomeProdotto + '.');
} else {
    console.log('Nicola dice: "Compro tutto"');
}

// controllo di tipo
if (typeof prezzoProdotto2 == "number") {
    console.log("Vero cavolo!");
}
if (typeof incrementoPrezzoProdotto == "string") {
    console.log("Qualcosa qui non quadra...");
}

// ternary (io la chiamo "if inline" però non ascoltatemi/leggete)
var nonNumero = (typeof nomeProdotto) ? true : false;
console.log(nonNumero);

// utilizzo dello statement "typeof"
console.log(typeof nomeProdotto);

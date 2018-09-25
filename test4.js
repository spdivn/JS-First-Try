/* creazione minigioco */

/* Titolo: Dadi
 * Descrizione: Creazione di un gioco di dadi
 * Regole: 
 *    STEP 1: 
 *          Giocano 2 player e tirano un dado uno alla volta quando vogliono.
 *    STEP 2: 
 *          Chi gira il dado con il valore più alto vince
 *    STEP 3:
 *          Se il vincitore vince due volte di fila allora ha perso
 *
 */

var vittoriaConsecutiva = 0,
<<<<<<< HEAD
    numeroA = 0,
    numeroB = 0,
    vittoriaA = 0,
    vittoriaB = 0;

function TiroA() {
    //Switch per i tiri tra i partecipanti
    if (numeroB == 0 && numeroA == 0) {

        numeroA = Math.floor((Math.random() * 6) + 1);
        console.log("Tiro da " + numeroA);

    } else if (numeroA == 0 && numeroB != 0) {

        numeroA = Math.floor((Math.random() * 6) + 1);
        console.log("Tiro da " + numeroA);

    }

    if (numeroA != 0 && numeroB != 0) {
        vittoriaConsecutiva = checkVittoria(numeroA, numeroB);

        //Controllo per vittorie negative
        if (vittoriaA < 0) {
            vittoriaA = 0;
        }
        if (vittoriaB < 0) {
            vittoriaB = 0;
        }

        //Switch con vittorie e vittorie totale
        checkVittoriaConsecutiva();
    }
}



function TiroB() {
    //Switch per i tiri tra i partecipanti
    if (numeroA == 0 && numeroB == 0) {

        numeroB = Math.floor((Math.random() * 6) + 1);
        console.log("Tiro da " + numeroB);

    } else if (numeroB == 0 && numeroA != 0) {

        numeroB = Math.floor((Math.random() * 6) + 1);
        console.log("Tiro da " + numeroB);

    }

    if (numeroA != 0 && numeroB != 0) {
        vittoriaConsecutiva = checkVittoria(numeroA, numeroB);

        //Controllo per vittorie negative
        if (vittoriaA < 0) {
            vittoriaA = 0;
        }
        if (vittoriaB < 0) {
            vittoriaB = 0;
        }

        //Switch con vittorie e vittorie totale
        checkVittoriaConsecutiva();
    }
}

function checkVittoriaConsecutiva() {
    switch (vittoriaConsecutiva) {
        case 1:
            {
                if (vittoriaA >= 2) {
                    console.log("Vince il secondo tizio!");
                    vittoriaA = 0;
                    vittoriaB++;
                } else {
                    console.log("Vince il primo tizio!");
                    vittoriaA++;
                    vittoriaB--;
                }
                break;
            }
        case 2:
            {
                if (vittoriaB >= 2) {
                    console.log("Vince il primo tizio");
                    vittoriaB = 0;
                    vittoriaA++;
                } else {
                    vittoriaB++;
                    vittoriaA--;
                    console.log("Vince il secondo tizio!");
                }
                break;
            }
        case 0:
            {
                console.log("Pareggio!");
                vittoriaB = 0;
                vittoriaA = 0;
                break;
            }
        default: {
            console.log("errore!");
            break;
        }
    }
    numeroA = 0;
    numeroB = 0;
}

function checkVittoria(dadoA, dadoB) {
    if (dadoA > dadoB) {
        return 1;
    } else if (dadoA < dadoB) {
        return 2;
    } else {
        return 0;
    }
}


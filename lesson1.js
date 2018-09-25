/**
 * Commento multilinea
 */
// Commento singola linea


/**
 * STATEMENT
 * 
 * E' un gruppo di numeri, operatori e parole (più avanti vedremo meglio) che eseguono una specifica attività. 
 * 
 * un rapido esempio di statement
 */
    a = 5;
    a = a * 2;

/**
 * EXPRESSIONS
 * 
 * Le espressioni sono un qualsiasi riferimento a variabile, valore, set di variabili o valori cominati con operatori
 * 
 * I due statement che abbiamo visto sono divisi in, rispettivamente, 2 e 4 espressioni.
 */
    // 5            litteral value expression
    // a            variable expression
    // a = 5        assignment expression

    // 2            litteral value expression
    // a            variable expression
    // a * 2        arithmetical expression
    // a = a * 2    assignment expression

/**
 * OPERATORS
 * 
 * Facciamo una piccola e veloce carrellata di operatori
 */
    // Assignment
        // = assegnazione
        a = 2;

    // Math
        // + addizione
        1 + 2;
        // - sottrazione
        3 - 1;
        // * moltiplicazione
        2 * 2;
        // / divisione
        2 / 1;

    // Increment / Decrement
        // ++ increment
        1++;// Sbagliato
        1+1;//giusto
        a++; //giusto
        // -- decrement
        2--;

    // Equity
        // ==   loose-equals
        2 == "2"; //return true perche non controlla i tipi ma i valori
        2 == 2; 
        // !=   loose not-equals
        2 != "1";
        2 != 1;
        // ===  strict-equals Condisera anche i tipi con i tre uguali 
        2 === "2"; //ritorna false perche i tipi sono diversi
        2 === 2; //ritorna true perche sono uguali come tipologia
        // !==  strict not-equals
        2 !== "2";
        2 !== 2;

    // Comparison
        // < minore di
        2 < 1;
        2 < 3;
        // <= minore o uguale di (loose-equals)
        2 <= 2;
        2 <= 1;
        // > maggiore di
        2 > 3;
        2 > 1;
        // >= maggiore o uguale di (loose-equals)
        2 >= 4;
        2 >= 2;

    // Logical
        // && and
        2 > 3 && 3 > 4
        // || or
        2 > 1 || 3 > 2





// Esercizio:
// – funzione "range"
// – parametri: inizio (numero intero), fine (numero intero)
// – output: un array di numeri dal numero inizio al numero fine
// – usare TDD (opzionale)


//              ****** FUNZIONE ******


function range( inizio , fine ){
    let result = [];  
    let nonString = [ parseInt(inizio) , parseInt(fine) ];
  
       if ( nonString[0] <= nonString[1] ){
              for(let i = nonString[0] ; i <= nonString[1] ; i++){
                result.push(i);
              }
          } 
  
    return result;
}

//              ****** OUTPUT ******


//Prova con piccole quantità di numeri
var array = range( 3 , 5 );
console.log(array);

//output log  *PASS*
/* 

3
4
5

*/

//Prova con grandi quantità di numeri
array = range( 100 , 1000 );
console.log(array);

//output log  *PASS*
/* 

100
101
102
...
1000

*/




//Funzionante con array negativi 
array = range( -2 , 0 );
console.log(array);

//output log   *PASS*
/*

-2
-1
0

*/


//Restituisce array vuoto dato che il numero di inizio è maggiore del numero di fine
array = range( 3 , 0 );
console.log(array);

//output log   *PASS*
/*  

[]

*/



//Funzionante con inizio e fine uguali 
array = range( 3 , 3 );
console.log(array);

//output log   *PASS*
/*  

3

*/

//Funzionante con singole string
array = range( "-100" , 3 );
console.log(array);

//output log   *PASS*
/*  

-100
-99
-98
...
3

*/


//Funzionante con doppie string
array = range( "-100" , "3" );
console.log(array);

//output log   *PASS*
/*  

-100
-99
-98
...
3

*/
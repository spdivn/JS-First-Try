[1,2,3,4,5,6,7,8,9].map( function ( n ) { 
                            return n*2
                          }
                       );

[1,2,3,4,5,6,7,8,9].filter( function ( n ) { 
                            return n>5
                            }
                          );

function even ( n ){
    return n % 2 === 0 ;
}

//TEST

[
  abs( 4 ) === 4,
  abs( 9 ) === 9,
  abs( -9 ) === 9,
  abs( 0 ) === 0,
].every( n => n ) || console.log('Test abs failed');

function abs ( n ){  
    return Math.abs(n);  
}

//Test driven developer

//Primo test deve fallire

//Secondo test : Creare meno righe possibili per poter rendere il test positivo

//Refactory ( Non cambiare il codice ma semplificarlo senza cambiare logica)

//Reinziare dal passo 1

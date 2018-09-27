//Data

var arrayIscrizioni = [
    {
    nome      : 'Ivan',
    cognome   : 'Spada',
    età       : 19,
    occhiali  : true,
    saluta    : function(){
            console.log('ciao');
    },
    nomeCompleto: function (){
            return this.nome+ ' ' + this.cognome;
    }
},{
    nome      : 'Nicola',
    cognome   : '',
    età       : 22,
    occhiali  : true,
    saluta    : function(){
            console.log('ciao');
    },
    nomeCompleto: function (){
            return this.nome+ ' ' + this.cognome;
    }
},{
    nome      : 'Giorgio',
    età       : 27,
    occhiali  : false,
}];

//PURE FUNCTIONS
//Funzioni che operano sui dati 

function nome(obj){
    return obj.nome;
}

function stampa ( studente ,chiave , array){
    
    console.log( studente.nome , chiave );

}

//TEST
var result = [];
for(let i = 0; i < arrayIscrizioni.length;i++){  
          result.push(nome( arrayIscrizioni[ i ] ));        
    }

arrayIscrizioni.forEach( stampa );

var result = arrayIscrizioni.map( 
        function (obj){
            return obj.nome;
        }
  );


//SIDE EFFECTS (IMPURE FUNCTIONS)
//Funzioni che leggono sui dati


// console.log(result);


// arrayIscrizioni[0].saluta();

// function presentati(){
//   console.log('Io sono ' + this.nome)
// }

// console.log(arrayIscrizioni[0].saluta);
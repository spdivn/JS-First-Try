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

"use strict";

var vittoria = 0,
    primoNumero = 0,
    secondoNumero = 0;
let app = [];

document.addEventListener("DOMContentLoaded", function (event) {
    // TODO: 
    // document.getElementById('Img1').addEventListener('load', function () {
    //     var that = this;
    //     this.classList.toggle('ruota');
    //     setTimeout(function () {
    //         that.classList.toggle('ruota');
    //     }, 2000);
    // });
    // document.getElementById('Img2').addEventListener('load', function () {
    //     var that = this;
    //     this.classList.toggle('ruota');
    //     setTimeout(function () {
    //         that.classList.toggle('ruota');
    //     }, 2000);
    // });
    document.getElementById('Img2').addEventListener('click', function () {
        var that = this;
        this.classList.toggle('ruota');
        setTimeout(function () {
            that.classList.toggle('ruota');
        }, 2000);
    });
    document.getElementById('Img1').addEventListener('click', function () {
        var that = this;
        this.classList.toggle('ruota');
        setTimeout(function () {
            that.classList.toggle('ruota');
        }, 2000);
    });

    var playerResult = document.querySelector('span'),
        statExtra = document.querySelector('[type="number"]'),
        tiro_A = document.querySelector('#Img1'),
        tiro_B = document.querySelector('#Img2');

    tiro_B.addEventListener('click', TiroB);
    tiro_A.addEventListener('click', TiroA);

    statExtra.addEventListener("focusout", function () {
        if (statExtra.value > 50) {
            statExtra.focus();
            alert("I valori ammessi sono max 50");
        } else if (statExtra.value <= 50 && statExtra.value < 0) {
            alert("I valori ammessi sono solo positivi");
        }
    });

    function TiroA() {
        //Switch per i tiri tra i partecipanti
        let maxRandom = document.querySelector('input[name=radio2]:checked');

        if (secondoNumero == 0 && primoNumero == 0) {
            primoNumero = generaNumero(1, maxRandom.value, 0);
        } else if (primoNumero == 0 && secondoNumero != 0) {
            primoNumero = generaNumero(1, maxRandom.value, 0);
        }

        app = [secondoNumero, primoNumero];
        playerResult.innerHTML = app[0] + ' : ' + app[1];
        ifVittoria();
    }


    function generaNumero(minValue, maxValue, stat) {
        if (Number(maxValue) == 100) {
            let app = (Math.floor((Math.random() * 10 + Number(minValue))) + Number(stat));
            return (app * 10);
        } else {
            if (stat == '' || stat <= 0) {
                return (Math.floor((Math.random() * Number(maxValue)) + Number(minValue)) + 0);
            } else {
                return (Math.floor((Math.random() * Number(maxValue)) + Number(minValue)) + Number(stat));
            }
        }
    }


    function TiroB() {
        //Switch per i tiri tra i partecipanti 
        if (statExtra.value <= 50) {
            let maxRandom = document.querySelector('input[name=radio]:checked');

            if (primoNumero == 0 && secondoNumero == 0) {
                secondoNumero = generaNumero(1, maxRandom.value, statExtra.value);
            } else if (secondoNumero == 0 && primoNumero != 0) {
                secondoNumero = generaNumero(1, maxRandom.value, statExtra.value);
            }

            app = [secondoNumero, primoNumero];
            playerResult.innerHTML = app[0] + ' : ' + app[1];
            ifVittoria();
        } else {
            alert("I valori ammessi sono max 50");
        }
    }

    function ifVittoria() {
        if (primoNumero != 0 && secondoNumero != 0) {
            vittoria = checkVittoria(primoNumero, secondoNumero);
        }
    }
    function checkVittoria(dadoA, dadoB) {
        if (dadoA > dadoB) {
            playerResult.innerHTML += ' <BR> Vince player 1';
            primoNumero = 0;
            secondoNumero = 0;
            return 1;
        } else if (dadoA < dadoB) {
            playerResult.innerHTML += ' <BR> Vince player 2';
            primoNumero = 0;
            secondoNumero = 0;
            return 2;
        } else {
            playerResult.innerHTML += ' <BR> Pareggio';
            primoNumero = 0;
            secondoNumero = 0;
            return 0;
        }
    }

});
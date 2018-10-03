document.addEventListener('DOMContentLoaded', function() {
    // setting variables to play
    var players = {
        names: {},
        launch: [], //array of "number => launch" for each player
        number: function(object) {
            var size = 0;
            for (key in object) {
                if (object.hasOwnProperty(key)) size++;
            }
            return size;
        }
    };

    var game = {
        name: "ThrowDice",
        launch: []
    };


    function getRandomValue() {
        return Math.round((Math.random() * 5) + 1);
    }

    /**
     * Function to init listeners
     */
    function addListeners() {
        var buttonsToPlay = document.querySelectorAll('.box button');
        for ( let index = 0; index < buttonsToPlay.length; index++ ) {
            const element = buttonsToPlay[index];
            element.addEventListener('click', function() {
                if (typeof this.getAttribute('data-player') !== 'undefined') {
                    var thisPlayer = this.getAttribute('data-player'),
                        checkPlayerExist = false;                    
                    for ( let prop in players.names ) {
                        if (prop == thisPlayer) {
                            checkPlayerExist = true;
                            thisPlayer = prop;
                        }
                    }
                    if (checkPlayerExist) {
                        // init player games
                        player_Play(players.names[thisPlayer]);
                    } else {
                        var thisPlayerNumber = players.number(players.number) + 1;
                        players.names[thisPlayerNumber] = this.getAttribute('data-player');
                        // init player games
                        player_Play(players.names[thisPlayerNumber]);
                    }
                }
            });
        }
    }

    function canPlay(thisPlayer) {


        
    }

    function player_Play(thisPlayer) {
        // TODO: Find if this player can play
            if (game.launch.length == 0 || canPlay(thisPlayer)) {
                // TODO: Let this player play
                launch(thisPlayer);
            }
        // TODO: Find how many players should play now
            // TODO: Warn them
    }

    function launch() {
        var valueOfLaunch = getRandomValue();
        players.launch.push(valueOfLaunch);
        players.
        checkWinner();
    }
    function player2_Play() {
        if (tiro2 <= tiro1) {
            player2 = getRandomValue();
            console.log('Lancio del player2: ', player2);
            tiro2++;
            checkWinner();
        }
    }

    function checkWinner() {
        if (tiro1 == tiro2) {
            if (player1 > player2) {
                vittoriaConsA++;
                vittoriaConsB = 0;
                console.log('Ha vinto il player A');
            } else if (player2 > player1) {
                vittoriaConsB++;
                vittoriaConsA = 0;
                console.log('Ha vinto il player B');
            } else {
                console.log('Pareggio!');
                vittoriaConsA = 0;
                vittoriaConsB = 0;
            }
        }
    }

    // launch functions
    addListeners();
})
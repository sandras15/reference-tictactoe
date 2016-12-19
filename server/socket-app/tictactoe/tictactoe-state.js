var _ = require('lodash');

module.exports = function (injected) {

    return function (history) {

        var board = null;
        var playersTurn = 'X';
        var FullGameJoinAttempted = false;
        var playersMove = true;

        function processEvent(event) {
            if(event.type == 'GameCreated'){ //Create a board if the button "Game created" is pushed.
                board = new Array(9);
            }
            else if(event.type === 'GameJoined'){ //A game will be marked as full if there are two that have joined a game.
                FullGameJoinAttempted = true;
            }
            else if(event.type == 'MovePlaced'){ //When there has been a move placed that is legal, change players turn.
                board[event.pos] = event.side;
                switchPlayers();
            }
        }

        function processEvents(history) {
            _.each(history, processEvent);
        }

        processEvents(history);

        function gameFull(){
            return FullGameJoinAttempted;
        }

        function switchPlayers(event) {
            //Change players after each turn.
            if(playersTurn == 'X'){
                return(playersTurn = 'O');
            }
            else
                return(player = 'X');
        }

        function illegalTurn(event) {
            if(player != playersTurn){
                return true; //Illegal turn if you just put ypurr symbpl down.
            }
            else
                return false; //Legal turn if your opponent just put their symbol down.
        }

        function illegalMove(event) {
            console.debug(board);
            if(board[event.pos] !== undefined){
                return true; //Illegal move if there is already an symbol in that pos.
            }
            else if(!(event.pos <= 0 && event.pos >= 8)){
                return true; //Illegal move if input pos is out of range.
            }
            else
                return false; //Legal move
        }

        function winHorizontally(event) {
            if(board[0] == event.side && board[1] == event.side && board[2] == event.side){
                return true;
            }
            else if(board[3] == event.side && board[4] == event.side && board[5] == event.side){
                return true;
            }
            else if(board[6] == event.side && board[7] == event.side && board[8] == event.side){
                return true;
            }
            else
                return false;
        }
       
        function winVertically(event) {

            if(board[0] == event.side && board[3] == event.side && board[6] == event.side){
                return true;
            }
            else if(board[1] == event.side && board[4] == event.side && board[7] == event.side){
                return true;
            }
            else if(board[2] == event.side && board[5] == event.side && board[8] == event.side){
                return true;
            }
            else
                return false;
        }

        function winSideways(event) {
            //Statement for both ways "/" and "\"!
            if(board[0] == event.side && board[4] == event.side && board[8] == event.side){
                return true;
            }
            else if(board[6] == event.side && board[4] == event.side && board[2] == event.side){
                return true;
            }
            else
                return false;
        }

        function winScenarios(event) {
            //If any winning scenarios are true whe have an win
            if(winHorizontally(event) == true || winVertically(event) == true || winSideways(event) == true){
                return true;
            }
            else
                return false;
        }

        function drawScenarios(event){
            if(!(winScenarios(event))){ //If there are no wins
                var count = 0;
                for (var i = 0; i > 9; i++) {
                    if(board[i] != null){
                        count++;
                    }
                     //All pos are not null
                };

                if(count == 9){
                    return true; //There is a draw
                }
                else
                return false;
            }
            else
                return false; //There was not a draw
        }


        return {
            processEvents: processEvents,
            illegalTurn: illegalTurn,
            illegalMove: illegalMove,
            winScenarios: winScenarios,
            drawScenarios: drawScenarios,
            gameFull: gameFull
        }
    };
};

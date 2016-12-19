
module.exports = function(injected){
    var TictactoeState = injected('TictactoeState');

    return function(history){

        var gameState = TictactoeState(history);
        var events = [];
        var pos;

        return {
            executeCommand: function(cmd, eventHandler){

                var cmdHandlers = {
                    "CreateGame": function (cmd) {
                        eventHandler([{
                            gameId: cmd.gameId,
                            type: "GameCreated",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            side:"X"
                        }]);

                    },
                    "JoinGame": function (cmd) {
                        if(gameState.gameFull()){
                            eventHandler( [{
                                gameId: cmd.gameId,
                                type: "FullGameJoinAttempted",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp
                            }]);
                            return;
                        }

                        eventHandler([{
                            gameId: cmd.gameId,
                            type: "GameJoined",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            side:"O"
                        }]);
                    },
                    "PlaceMove": function(cmd){

                        // Check here for conditions which prevent command from altering state
                        if(gameState.illegalTurn(cmd)){ //Check illegal turn func
                            eventHandler( [{
                                gameId: cmd.gameId,
                                type: "NotYourMove",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                            }]);
                            return;
                        }
                        else if(gameState.illegalMove(cmd)){ //Check illegal move func
                            eventHandler( [{
                                gameId: cmd.gameId,
                                type: "IllegalMove",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                            }]);
                            return;
                        }
                        

                        events.push({
                            gameId: cmd.gameId,
                            type: "MovePlaced",
                            user: cmd.user,
                            name: cmd.name,
                            timeStamp: cmd.timeStamp,
                            side: cmd.side,
                            pos: cmd.pos
                        });

                        gameState.processEvents(events); //Push the pos choosen here above with correct side.

                        // Check here for conditions which may warrant additional events to be emitted.

                        if(gameState.winScenarios(cmd)){ //Check for win scenarios
                            events.push({
                                gameId: cmd.gameId,
                                type: "GameWon",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                            });
                        }
                        else if(gameState.drawScenarios(cmd)){ //Check for draw scenarios
                            events.push({
                                gameId: cmd.gameId,
                                type: "Draw",
                                user: cmd.user,
                                name: cmd.name,
                                timeStamp: cmd.timeStamp,
                                side: cmd.side
                            });
                        }

                        eventHandler(events);
                    }
                };

                if(!cmdHandlers[cmd.type]){
                    throw new Error("I do not handle command of type " + cmd.type)
                }
                cmdHandlers[cmd.type](cmd);
            }
        }
    }
}

#Test Examples

When you have given-events/when-command/then-events scenarios for at least the following:

##1. Create game command
__Given:__ That a game has yet not been created.
__When:__ A game is created and
__Then:__ You can play game.


 *    should emit game created event

##2. Join game command
__Given:__ 
__When:__
__Then:__ 

 *    should emit game joined event
 *    should emit FullGameJoinAttempted when game full


##3. Place move command
__Given:__ There has been a game created. There are two players in the game and no one has made their move.
__When:__ The first player makes his move, his symbol(X or O) is placed in the spot the player picked.
__Then:__ The next player can make their move.

 *    should emit MovePlaced on first game move
 *    should emit IllegalMove when square is already occupied
 *    Should emit NotYourMove if attempting to make move out of turn
 *    Should emit game won on <case x>
 *    Should not emit game draw if won on last move
 *    Should emit game draw when neither wins <case x>

##4. Illegal move command
__Given:__ 
__When:__
__Then:__ 

##5. Legal move command
__Given:__ 
__When:__
__Then:__ 

##6. Illegal turn
__Given:__ 
__When:__
__Then:__ 

##7. Legal turn
__Given:__ 
__When:__
__Then:__ 

##8. Win scenario
__Given:__ 
__When:__
__Then:__ 

##9. Draw scenario
__Given:__ 
__When:__
__Then:__ 

##10. 
__Given:__ 
__When:__
__Then:__ 

##11. 
__Given:__ 
__When:__
__Then:__ 

##12. 
__Given:__ 
__When:__
__Then:__ 

##13. 
__Given:__ 
__When:__
__Then:__

##14. 
__Given:__ 
__When:__
__Then:__  
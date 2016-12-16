#Test Examples <br />

When you have given-events/when-command/then-events scenarios for at least the following: 

###1. Create game command <br />
__Given:__ That a game has yet not been created. <br />
__When:__ A game is created and <br />
__Then:__ You can play game. <br />


 *    should emit game created event

##2. Join game command <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

 *    should emit game joined event
 *    should emit FullGameJoinAttempted when game full


##3. Place move command <br />
__Given:__ There has been a game created. There are two players in the game and no one has made their move. <br />
__When:__ The first player makes his move, his symbol(X or O) is placed in the spot the player picked. <br />
__Then:__ The next player can make their move. <br />

 *    should emit MovePlaced on first game move
 *    should emit IllegalMove when square is already occupied
 *    Should emit NotYourMove if attempting to make move out of turn
 *    Should emit game won on <case x>
 *    Should not emit game draw if won on last move
 *    Should emit game draw when neither wins <case x>

##4. Illegal move command <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##5. Legal move command <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##6. Illegal turn <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##7. Legal turn <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##8. Win scenario <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##9. Draw scenario <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##10. <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##11. <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##12. <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##13. <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />

##14. <br />
__Given:__ <br />
__When:__ <br />
__Then:__  <br />
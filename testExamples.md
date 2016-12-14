#My examples

When you have given-events/when-command/then-events scenarios for at least the following:

1. Create game command
 *    should emit game created event

2. Join game command
 *    should emit game joined event
 *    should emit FullGameJoinAttempted when game full

3. Place move command
 *    should emit MovePlaced on first game move
 *    should emit IllegalMove when square is already occupied
 *    Should emit NotYourMove if attempting to make move out of turn
 *    Should emit game won on <case x>
 *    Should not emit game draw if won on last move
 *    Should emit game draw when neither wins <case x>
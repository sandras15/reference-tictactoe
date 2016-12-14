#Mock Tests for TicTacToe <br />
###Board <br />

    | 1 | 2 | 3 |
    -------------
    | 4 | 5 | 6 |
    -------------
    | 7 | 8 | 9 |

If our bord would look like this we can consiter the scenarios of. <br />

##1. Win <br />
If eather X or O have 3 of their symbols in a row.
###Winning scenarios could be one of the following: <br />

    | X | X | X |
    -------------
    | 4 | 5 | 6 |
    -------------
    | 7 | 8 | 9 |


    | 1 | 2 | 3 |
    -------------
    | O | O | O |
    -------------
    | 7 | 8 | 9 |


    | 1 | 2 | 3 |
    -------------
    | 4 | 5 | 6 |
    -------------
    | X | X | X |


    | O | 2 | 3 |
    -------------
    | O | 5 | 6 |
    -------------
    | O | 8 | 9 |


    | 1 | X | 3 |
    -------------
    | 4 | X | 6 |
    -------------
    | 7 | X | 9 |
    

    | 1 | 2 | O |
    -------------
    | 4 | 5 | O |
    -------------
    | 7 | 8 | O |
    

    | X | 2 | 3 |
    -------------
    | 4 | X | 6 |
    -------------
    | 7 | 8 | X |
    

    | 1 | 2 | O |
    -------------
    | 4 | O | 6 |
    -------------
    | O | 8 | 9 |

##2. Draw <br />
If there is nobody that wins
###Draw scenarios would be: <br />

When the game has been fully played an neither X or O have won the game. <br />

    | X | O | X |
    -------------
    | X | O | O |
    -------------
    | O | X | X |

##3. Illegal Move <br />
If there is already a symbol in the place you want to put your symbol.
###Illegal Move scenarios would be: <br />

If it was O's turn and he wanted to put his symbol at place 5. But now X has already taken the place where 5 was when it was X's turn before O's turn was. <br />

    | 1 | 2 | 3 |
    -------------
    | 4 | X | 6 |
    -------------
    | 7 | 8 | 9 |
  
The same goes for both symbols. Neither of them can put down their symbol if there is already an X or an O there.

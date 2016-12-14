#Mock Tests for TicTacToe <br />

                           | 1 | 2 | 3 |
                           -------------
            BOARD    =     | 4 | 5 | 6 |   
                           -------------
                           | 7 | 8 | 9 |

###If our bord would look like the here above we can consiter the scenarios of. <br />
1. __Win__ - If eather X or O have 3 of their symbols in a row we have a win.  <br />
2. __Draw__ - If there is nobody that wins  <br />
3. __Illegal Move__ - If there is already a symbol in the place you want to put your symbol.  <br />


##Winning scenarios could be one of the following: <br />

                | * | * | * |         | 1 | 2 | 3 |         | 1 | 2 | 3 |         | * | 2 | 3 |
                -------------         -------------         -------------         ------------- 
                | 4 | 5 | 6 |         | * | * | * |         | 4 | 5 | 6 |         | * | 5 | 6 |
                -------------         -------------         -------------         -------------
                | 7 | 8 | 9 |         | 7 | 8 | 9 |         | * | * | * |         | * | 8 | 9 |

                            -------------------------- OR ------------------------------

                | 1 | * | 3 |         | 1 | 2 | * |         | * | 2 | 3 |         | 1 | 2 | * |
                -------------         -------------         -------------         ------------- 
                | 4 | * | 6 |         | 4 | 5 | * |         | 4 | * | 6 |         | 4 | * | 6 |
                -------------         -------------         -------------         -------------
                | 7 | * | 9 |         | 7 | 8 | * |         | 7 | 8 | * |         | * | 8 | 9 |


                                * Would have to be all the same symbol in a row.


##Draw scenarios would be: <br />

When the game has been fully played an neither X or O have won the game. <br />

    | X | O | X |
    -------------
    | X | O | O |
    -------------
    | O | X | X |


##Illegal Move scenarios would be: <br />

If it was O's turn and he wanted to put his symbol at place 5. But now X has already taken the place where 5 was when it was X's turn before O's turn was. <br />

    | 1 | 2 | 3 |
    -------------
    | 4 | X | 6 |
    -------------
    | 7 | 8 | 9 |
  
The same goes for both symbols. Neither of them can put down their symbol if there is already an X or an O there.

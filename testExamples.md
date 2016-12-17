#Test Examples <br />

		                           | (0,0) | (0,1) | (0,3) |
		                           -------------------------
		            BOARD    =     | (1,0) | (1,1) | (1,3) |   
		                           -------------------------
		                           | (2,0) | (2,1) | (2,3) |

##Form for the test examples:
	* Given [Events], 
	* When [Command]
	* Then [Resulting Event(s)]



##1. Create game command <br />
* __Given:__ That a game has yet not been created. <br />
* __When:__ Button is pushed "Create new game". <br />
* __Then:__ A new game will be greated. <br />


##2. Join game command scenarios: <br />
###Join available game
* __Given:__ A game has been created. <br />
* __When:__ Button is pushed "Join game". <br />
* __Then:__  [GameJoined]<br />

###Join unavailable game(already full) <br />
* __Given:__ A game has been created. Two player have already joind the game. <br />
* __When:__ Button is pushed "Join game". <br />
* __Then:__  [FullGameJoinAttempted] Error message will be displayed "Unavailable game - It already has two players."<br />
	 

##4. Move command scenarios: <br />

###Place move command <br />
* __Given:__ There has been a game created. There are two players in the game and no one has made their move. <br />
* __When:__ The first player makes his move, his symbol(X or O) is placed in the spot the player picked. <br />
* __Then:__ The next player can make their move. <br />


###Legal move command for 'X' <br />
* __Given:__ A game has been created. Two players have joined. It is X's turn to move. Coordinates [0,1] are empty. <br />
* __When:__ [ Place(0,1,X) ] <br />
* __Then:__ [[MovePlaced(0,1,X)] Move has been placed on the board in the middle and now that box has an X. <br />

###Legal move command for 'O' <br />
* __Given:__ A game has been created. Two players have joined. It is O's turn to move. Coordinates [0,1] are empty. <br />
* __When:__ [ Place(0,1,O) ] <br />
* __Then:__ [[MovePlaced(0,1,O)] Move has been placed on the board in the middle and now that box has an O. <br />

### Illegal move command for 'X'
* __Given:__ A game has been created. Two players have joined. It is X's turn to move. Coordinates [0,1] are not empty. [Placed(0,1,O)] <br />
* __When:__ [ Place(0,1,X) ] <br />
* __Then:__ [IllegalMove] Displays message "Square is already occupied!". <br />

### Illegal move command for 'O'
* __Given:__ A game has been created. Two players have joined. It is O's turn to move. Coordinates [0,1] are not empty. [Placed(0,1,X)] <br />
* __When:__ [ Place(0,1,O) ] <br />
* __Then:__ [IllegalMove] Displays message "Square is already occupied!". <br />

### Illegal move not in board for 'X'
* __Given:__ A game has been created. Two players have joined. It is X's turn to move. <br />
* __When:__ [ Place(3,3,X) ] <br />
* __Then:__ [IllegalMove] Displays message "Coordinates don't compare to board!". <br />

### Illegal move not in board for 'O'
* __Given:__ A game has been created. Two players have joined. It is O's turn to move. <br />
* __When:__ [ Place(3,3,O) ] <br />
* __Then:__ [IllegalMove] Displays message "Coordinates don't compare to board!". <br />


### 'X' has the first move <br />
* __Given:__ A game has been created. Two players have joined. Board is empty. It is X's turn to move. <br />
* __When:__ [ Place(0,1,X) ] <br />
* __Then:__  [MovePlaced(0,1,X)] Move has been placed on the board in the middle and now that box has an X. <br />

 *    should emit MovePlaced on first game move

### 'O' has the first move <br />
* __Given:__ A game has been created. Two players have joined. Board is empty. It is O's turn to move. <br />
* __When:__ [ Place(0,1,O) ] <br />
* __Then:__ [MovePlaced(0,1,O)] Move has been placed on the board in the middle and now that box has an O. <br />

### Illegal turn for 'X' <br />
* __Given:__ A game has been created. Two players have joined. It is the O's turn to move.<br />
* __When:__  Place(0,1,X) ] <br />
* __Then:__  [NotYourMove] Displays message "Not your move to make! Wait your turn."<br />

### Illegal turn for 'O' <br />
* __Given:__ A game has been created. Two players have joined. It is the X's turn to move.<br />
* __When:__  Place(0,1,O) ] <br />
* __Then:__  [NotYourMove] Displays message "Not your move to make! Wait your turn."<br />

### Legal turn for 'X' <br />
* __Given:__ A game has been created. Two players have joined. It is your turn to move, or X's turn. Coordinates [0,1] are empty. <br />
* __When:__ [Place(0,1,X)] <br />
* __Then:__ [MovePlaced(0,1,X)]

### Legal turn for 'O' <br />
* __Given:__ A game has been created. Two players have joined. It is your turn to move, or O's turn. Coordinates [0,1] are empty. <br />
* __When:__ [Place(0,1,O)] <br />
* __Then:__ [MovePlaced(0,1,O)]

##Winning scenarios:

###'X' wins horizontally "--" in first row <br />
* __Given:__ [ Placed(0,0,X), Placed(0,1,X) ] <br />
* __When:__ [ Place(0,2,X) ] <br />
* __Then:__ [ X Won ] <br />

------------------------

### 'X' wins horizontally "--" in second row <br />
* __Given:__ [ Placed(1,0,X), Placed(1,1,X) ] <br />
* __When:__ [ Place(1,2,X) ] <br />
* __Then:__ [ X Won ] <br />

------------------------

### 'X' wins horizontally "--" in third row <br />
* __Given:__ [ Placed(2,0,X), Placed(2,1,X) ] <br />
* __When:__ [ Place(2,2,X) ] <br />
* __Then:__ [ X Won ] <br />

------------------------

### 'O' wins horizontally "--" in first row <br />
* __Given:__ [ Placed(0,0,O), Placed(0,1,O) ] <br />
* __When:__ [ Place(0,2,O) ] <br />
* __Then:__ [ O Won ] <br />

------------------------

### 'O' wins horizontally "--" in second row <br />
* __Given:__ [ Placed(1,0,X), Placed(1,1,X) ] <br />
* __When:__ [ Place(1,2,X) ] <br />
* __Then:__ [ O Won ] <br />

------------------------

### 'O' wins horizontally "--" in third row <br />
* __Given:__ [ Placed(2,0,O), Placed(2,1,O) ] <br />
* __When:__ [ Place(2,2,O) ] <br />
* __Then:__ [ O Won ] <br />

------------------------

### 'X' wins vertically "|" in first column<br />
* __Given:__ [ Placed(0,0,X), Placed(0,2,X) ] <br />
* __When:__ [ Place(0,2,X) ]<br />
* __Then:__ [ X Won ] <br />

------------------------

### 'X' wins vertically "|" in second column<br />
* __Given:__ [ Placed(1,0,X), Placed(1,2,X) ] <br />
* __When:__ [ Place(1,2,X) ]<br />
* __Then:__ [ X Won ] <br />

------------------------

### 'X' wins vertically "|" in third column<br />
* __Given:__ [ Placed(2,0,X), Placed(2,2,X) ] <br />
* __When:__ [ Place(2,2,X) ]<br />
* __Then:__ [ X Won ] <br />

------------------------

### 'O' wins vertically "|" in first column<br />
* __Given:__ [ Placed(0,0,O), Placed(0,2,O) ] <br />
* __When:__ [ Place(0,2,O) ]<br />
* __Then:__ [ O Won ] <br />

------------------------

### 'O' wins vertically "|" in second column<br />
* __Given:__ [ Placed(1,0,O), Placed(1,2,O) ] <br />
* __When:__ [ Place(1,2,O) ]<br />
* __Then:__ [ O Won ] <br />

------------------------

### 'O' wins vertically "|" in third column<br />
* __Given:__ [ Placed(2,0,O), Placed(2,2,O) ] <br />
* __When:__ [ Place(2,2,O) ]<br />
* __Then:__ [ O Won ] <br />

------------------------

##'X' wins sideways "\" <br />
* __Given:__ [ Placed(0,0,X), Placed(2,2,X) ] <br />
* __When:__ [ Place(1,1,X) ]<br />
* __Then:__ [ X Won ] <br />

------------------------

##'O' wins sideways "\" <br />
* __Given:__ [ Placed(0,0,O), Placed(2,0,O) ] <br />
* __When:__ [ Place(1,1,O) ]<br />
* __Then:__ [ O Won ] <br />

------------------------

##'X' wins sideways "/" <br />
* __Given:__ [ Placed(0,2,X), Placed(2,0,X) ] <br />
* __When:__ [ Place(1,1,X) ]<br />
* __Then:__ [ X Won ] <br />

------------------------

##'O' wins sideways "/" <br />
* __Given:__ [ Placed(0,2,O), Placed(2,0,O) ] <br />
* __When:__ [ Place(1,1,O) ]<br />
* __Then:__ [ O Won ] <br />

------------------------

##Draw scenarios <br />

###Board is full:
* __Given:__ [ Placed(0,0,O), Placed(0,1,X), Placed(0,2,O) , Placed(1,0,O), Placed(1,1,X), Placed(1,2,O), Placed(2,1,X), Placed(2,2,O) ] <br />
* __When:__ Placed(2,0,O) ]<br />
* __Then:__  [Draw] Displays message "It's a draw! Board is full!" <br />

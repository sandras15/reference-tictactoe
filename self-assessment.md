Game URL (AWS)
* http://35.165.28.215:80/

## Scripts

Outline what script files you created and the purpose of each file. Each file should be commented. This could be

- Docker build: _/buildDocker.sh_
	- __Purpose:__ 

- Docker compose: _/scripts/docker-compose.yaml_
	- __Purpose:__ 

- Docker compose and run: _/scripts/docker-compose-and-run.sh_
	- __Purpose:__ 

- AWS Provisioning: _/provisioning/provision-new-enviroment.sh_ (Not implemented fully)
	- __Purpose:__ 

- Cleaning images: _/scripts/removeImages.sh_
	- __Purpose:__ 

- Cleaning containers: _/scripts/removeContainers.sh_
	- __Purpose:__ 

- Git Commit script: _/gitCommit.sh_
	- __Purpose:__ 

- Docker Connect:  ubuntu@i-f1efa454:~/dockerConnect.sh/
	- __Purpose:__ Connect the ubuntu machine to Docker.



## Testing & logic

Outline what tests you created.

- UnitTests, server logic TDD (Git commit log)
	- Implemented tests:
		1. should emit game created event
		2. should emit game joined event
		3. should emit FullGameJoinAttempted event when game full
		4. should emit MovePlaced on first game move
		5. should emit IllegalMove when square is already occupied
		6. should emit NotYourMove if attempting to make move out of turn
		7. should emit game won horizontally
		8. should emit game won vertically
		9. should emit game won sideways \
		10. should emit game won sideways /
		11. should not emit game draw if won on last move
		12. should emit game draw when neither wins
		13. should emit IllegalMove when square is already occupied

- Unfortunatly the game is not playable :pensive:.



## Data migration

Did you create a data migration.

- Migration up and down: Yes!
	- A new file was created called _2016121412231-add-column-aggregate-id.js_
	- __Purpose:__ To add a column to the eventlog table that already exists.



## Jenkins

Do you have the following Jobs and what happens in each Job:

- __Commit Stage:__ Yes :smiley:! 
	- __URL:__ http://82.221.49.109:8080/job/TicTacToe_CommitStage/ 

- __Deploy Stage:__ Yes :smiley:!
	- __URL:__ http://82.221.49.109:8080/job/TicTacToe_Deploy/ 




__I used the following features in Jenkins:__
- Pipeline :smiley:!
	- __URL:__ http://82.221.49.109:8080/view/TicTacToe_Pipeline/

- Test reports :smiley:!
	- Implemented in TicTacToe_CommitStage. The test resaults are exported to an xml files in the _/xmltests_ folder. The xml files specify the success of the server side unit tests that have been made. 



## Other
### Documentation:
Documents made:
- This document.
- mocktest.md
- testExamples.md
- cheetsheet.md

#Self Assesment

##Another Repository:
Here is a link to another repository. The repository is private but Hannes and Guðlaugur have access to it.
* __URL:__ https://github.com/sandras15/hgop_sandras15

##Game URL (AWS)
* http://35.165.28.215:80/

##DockerHub Account
* __URL:__ https://hub.docker.com/u/sandras15/

## Scripts

Outline what script files you created and the purpose of each file. Each file should be commented. This could be

- __Docker build:__ _/buildDocker.sh_
	- Purpose:

- __Docker compose:__ _/scripts/docker-compose.yaml_
	- Purpose:

- __Docker compose and run:__ _/scripts/docker-compose-and-run.sh_
	- Purpose: 

- __AWS Provisioning:__ _/provisioning/provision-new-enviroment.sh_ (Not implemented fully)
	- Purpose:

- __Cleaning images:__ _/scripts/removeImages.sh_
	- Purpose:

- __Cleaning containers:__ _/scripts/removeContainers.sh_
	- Purpose: 

- __Server Run:__ 
	- Purpose:

- __Connect Database:__ 
	-Purpose:

- __Git Commit script:__ _/gitCommit.sh_
	- __Purpose:__ 

- __Docker Connect:__  ubuntu@i-f1efa454:~/dockerConnect.sh/
	- __Purpose:__ Connect the ubuntu machine to Docker. Found in the root of ubuntu.




## Testing & logic

Outline what tests you created.

- Implemented UnitTests are the following:
	1. _should emit game created event_
	2. _should emit game joined event_
	3. _should emit FullGameJoinAttempted event when game full_
	4. _should emit MovePlaced on first game move_
	5. _should emit IllegalMove when square is already occupied_
	6. _should emit NotYourMove if attempting to make move out of turn_
	7. _should emit game won horizontally_
	8. _should emit game won vertically_
	9. _should emit game won sideways "\"_
	10. _should emit game won sideways "/"_
	11. _should not emit game draw if won on last move_
	12. _should emit game draw when neither wins_
	13. _should emit IllegalMove when square is already occupied_

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
	- Implemented in TicTacToe_CommitStage. The test resaults are exported to an xml files in the _/xmltests_ folder. The xml files specify the success of the unit tests that have been made. 



## Other
### Documentation:
Documents made:
- This document.
- mocktest.md
- testExamples.md
- cheetsheet.md

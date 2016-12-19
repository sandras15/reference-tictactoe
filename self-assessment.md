#Self Assesment

##Another Repository URL
Here is a link to another repository. The repository is private but Hannes and Guðlaugur have access to it.
* https://github.com/sandras15/hgop_sandras15

##Game URL (AWS)
* http://35.165.28.215:80/

##DockerHub Account URL
* https://hub.docker.com/u/sandras15/

## Scripts

- __Docker build:__ _/buildDocker.sh_
	- Purpose: The script builds the project among building an docker image. It also pulls and pushes from/to DockerHub.

- __Docker compose:__ _/docker-compose.yaml_
	- Purpose: The yaml file tells the production server how to runs it's image.

- __Docker compose and run:__ _/scripts/docker-compose-and-run.sh_
	- Purpose: The script shutsdown docker-compose, erases all images if there are some and then runs docker-compose back up.

- __AWS Provisioning:__ _/provisioning/provision-new-enviroment.sh_ (Not implemented fully)
	- Purpose: Should create a new instace of aws and be runnable on its own.

- __Cleaning images:__ _/scripts/removeImages.sh_
	- Purpose: Remove all running images.

- __Cleaning containers:__ _/scripts/removeContainers.sh_
	- Purpose: Remove all running containers that may interfear.

- __Connect Server and Database:__ _/scripts/createDB.sh_
	-Purpose: The script is runned from the _/buildDocker.sh_ script when ever there is a new container created from the docker image designed by Dockerfile. It also migrates the server and database and then it runs the run.js with node.

- __Git Commit script:__ _/gitCommit.sh_
	- __Purpose:__ Make it easier to cpush to GitHub.

- __Docker Connect:__  _ubuntu@i-f1efa454:~/dockerConnect.sh/_
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

Jobs:

- __Commit Stage:__ Yes :smiley:! 
	- __URL:__ http://82.221.49.109:8080/job/TicTacToe_CommitStage/ 
	- The following job pulls any changes made to GitHub repository. Then it runs the "Docker Build" script and runs the UnitTests.
	- Code in configuration: <br />
		./buildDocker.sh

- __Deploy Stage:__ Yes :smiley:!
	- __URL:__ http://82.221.49.109:8080/job/TicTacToe_Deploy/ 
	- The following job deploys the image created in the Commit Stage over to the amazon server(AWS) and makes a secure copy of neccasary files over to AWS server also.
	- Code in configuration: <br />
		scp -o StrictHostKeyChecking=no -i "../sandras15-ec2-key-pair-oregon.pem" ./docker-compose.yaml ec2-user@35.165.28.215:~/docker-compose.yaml <br />
		scp -o StrictHostKeyChecking=no -i "../sandras15-ec2-key-pair-oregon.pem" ./.env ec2-user@35.165.28.215:~/.env <br />
		ssh -o StrictHostKeyChecking=no -i "../sandras15-ec2-key-pair-oregon.pem" ec2-user@35.165.28.215 ./docker-compose-and-run.sh <br />




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

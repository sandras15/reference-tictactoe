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

- API Acceptance test - fluent API

- Load test loop

- UI TDD

- Is the game playable? Nope.



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




Did you use any of the following features in Jenkins?

- Schedule or commit hooks

- Pipeline: Yes:smiley:!

- Test reports: Yes:smiley:!




## Monitoring

Did you do any monitoring?

- URL to monitoring tool. Must be open or include username and pass.



## Other

Anything else you did to improve you deployment pipeline of the project itself?

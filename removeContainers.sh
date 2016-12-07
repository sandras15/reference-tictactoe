#!/bin/bash

echo Cleaning containers...		#Write the message "Cleaning containers..."

docker stop $(docker ps -a -q) 	#Stop the running docker if running
docker rm $(docker ps -a -q)	#Remove all docker containers

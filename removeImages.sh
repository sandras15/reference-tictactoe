#!/bin/bash

echo Cleaning images...			#Write the message "Cleaning images..."

docker rmi $(docker images -q)	#Remove docker images that already exist

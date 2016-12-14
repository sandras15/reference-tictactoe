#!/bin/bash

set -e 							#Stops the script run if any errors occur.

docker-compose down 			#Stop docker-compose
if [ -z "$docker images" ]; then
  export docker rmi $(docker images -q)  #Remove docker images
fi
docker-compose up -d 			#Run docker-compse

exit 0							#Exit status 0 if succsess, otherwise it will exit with another exitcode. 0 = Good, 1 = Bad

#!/bin/bash

set -e 				#Stops the script run if any errors occur.

sleep 10   			#Pauses the script for 10 seconds so it can start and connect

npm run migratedb	#Run database, other command for db-migrate --config
node run.js			#Run run.js with node. The run.js javascript file connects to the ports given in file.

exit 0				#Exit status 0 if succsess, otherwise it will exit with another exitcode. 0 = Good, 1 = Bad

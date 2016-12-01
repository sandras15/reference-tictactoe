#!/bin/bash

set -e 				#Stops the script run if any errors occur.

sleep 10   			#ekki endalausn - Verður að breyta seinna meir

npm run migratedb	#Run database, other command for db-migrate --config
node run.js			#

exit 0				#Exit status 0 if succsess, otherwise it will exit with another exitcode. 0 = Good, 1 = Bad

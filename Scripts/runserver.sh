#!/bin/bash

set -e  				#Stops the script run if any errors occur.

sleep 10				#Sleep the
npm run migratedb 		#Run migratedb
node run.js 			#Run the run.js with node

exit 0 					#Exit status 0 if succsess, otherwise it will exit with another exitcode. 0 = Good, 1 = Bad
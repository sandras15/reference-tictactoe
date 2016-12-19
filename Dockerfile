FROM node
WORKDIR .

COPY . .

#Copy everyting from my current directory to image			
	

ENV NODE_PATH .			

#Environment variable that? ??? ATH	


RUN npm install --silent	

#Run the install for npm and do it silently so you don't see alot of text on your screen.


EXPOSE 80			

#Expose on port 80.


CMD ["./scripts/createDB.sh"]		

#Run the script "./createDB.sh" in the folder Scripts, to connect it with the database.
#The ./createDB.sh script runs two other scripts, first migratedb and then run.js.

export NODE_PATH=.

npm run clean
npm run createbuild           
npm run buildclient

mv client/build build/static

cp -R server build/server

mkdir -p build/client/source 					
#Create source folder under

cp -r client/src/common build/client/source		
#Copy client source over to build source
cp run.js build 								
#Copy run.js over to build folder
cp runserver.sh build 							
#Copy runserver.sh script to build folcer
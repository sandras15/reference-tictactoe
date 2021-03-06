#!/bin/bash

rm -rf node_modules   #Remove npm from root
npm install           #Install npm again in root

cd client             #Go to client folder
rm -rf node_modules   #Remove npm from client
npm install           #Install npm again in client

cd ..                  #Go out of client folder

echo Cleaning...       #Write the message "Cleaning..."
rm -rf ./build         #Remove build if there is one already

if [ -z "$GIT_COMMIT" ]; then
  export GIT_COMMIT=$(git rev-parse HEAD)
  export GIT_URL=$(git config --get remote.origin.url)
fi

# Remove .git from url in order to get https link to repo (assumes https url for GitHub)
export GITHUB_URL=$(echo $GIT_URL | rev | cut -c 5- | rev)


echo Building App       #Write the message "Building App"
npm run build           #Runs the script to build the app

rc=$?
if [[ $rc != 0 ]] ; then
    echo "Npm build failed with exit code " $rc
    exit $rc
fi

mkdir ./build/public/   #Create folder

cat > ./build/.env <<_EOF_
GIT_COMMIT=$GIT_COMMIT
_EOF_

cat > ./build/githash.txt <<_EOF_
$GIT_COMMIT
_EOF_

cat > ./build/public/version.html << _EOF_
<!doctype html>
<head>
   <title>App version information</title>
</head>
<body>
   <span>Origin:</span> <span>$GITHUB_URL</span>
   <span>Revision:</span> <span>$GIT_COMMIT</span>
   <p>
   <div><a href="$GITHUB_URL/commits/$GIT_COMMIT">History of current version</a></div>
</body>
_EOF_

cp ./package.json ./build/          #copy the package.json file in to the build folder
cp ./Dockerfile ./build/            #copy the Dockerfile
cp ./scripts/createDB.sh ./build/   #copy the createDB.sh script in to the build folder

cd build                    #Accsess the build folder
echo Building docker image  #Write the message "Building docker image"

docker build -t sandras15/tictactoe:$GIT_COMMIT .  #Build the image sandras15/tictactoe

rc=$?
if [[ $rc != 0 ]] ; then
    echo "Docker build failed " $rc
    exit $rc
fi

docker push sandras15/tictactoe:$GIT_COMMIT       #Push the image to DockerHub
rc=$?
if [[ $rc != 0 ]] ; then
    echo "Docker push failed " $rc
    exit $rc
fi

echo "Done"

cd ..               #Go out of the build folder

mkdir ./xmltests    #Create folder called xmltests
npm run xmltests    #Run script from pacage.json

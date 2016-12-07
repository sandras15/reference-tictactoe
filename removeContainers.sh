#!/bin/bash

echo Cleaning containers...

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

#!/bin/bash

echo Cleaning images..

docker rmi $(docker images -q)

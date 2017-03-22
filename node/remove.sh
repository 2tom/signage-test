#!/bin/sh

docker rm -v $(docker ps -a | grep Exited | awk '{ print $1 }')

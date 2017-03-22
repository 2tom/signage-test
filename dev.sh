#!/bin/sh

image="2tom/nodejs:6.10.0"
docker run\
 -d\
 --name signage_test\
 -v `pwd`:/src\
 -p 3000:3000\
 -it $image

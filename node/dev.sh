#!/bin/sh

image="2tom/nodejs:v4.2.4"
docker run\
 --name node_test\
 -v `pwd`/src:/src\
 -p 3000:3000\
 --link redis_test:redis\
 -it $image\
 /bin/bash

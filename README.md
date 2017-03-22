# signage-test

## platform

```
$ docker-machine create --driver amazonec2 --amazonec2-region ap-northeast-1 --amazonec2-zone c aws01 
$ eval $(docker-machine env aws01)
$ docker-machine ssh aws01

$ sudo gpasswd -a ubuntu docker
$ sudo apt-get -y update && sudo apt-get -y upgrade
$ sudo reboot
```

```
$ eval $(docker-machine env aws01)
$ docker-machine ssh aws01
$ 
```

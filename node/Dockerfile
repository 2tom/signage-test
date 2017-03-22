FROM ubuntu:16.10

MAINTAINER 2tom <tera1215@gmail.com>

RUN echo "Asia/Tokyo" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update && apt-get install -y\
 git-core\
 curl\
 unzip\
 build-essential\
 libcurl4-openssl-dev\
 software-properties-common\
 bzip2\
 vim\
 && rm -rf /var/lib/apt/lists/*

ENV HOME /root
ENV NVM_VERS v0.32.1
ENV NODE_VERS v6.10.0
ENV PATH /root/.nvm/$NODE_VERS/bin:$PATH

RUN git clone https://github.com/creationix/nvm.git $HOME/.nvm\
 && cd $HOME/.nvm\
 && git checkout $NVM_VERS

RUN bash -c '. $HOME/.nvm/nvm.sh; nvm install $NODE_VERS && nvm alias default $NODE_VERS'
RUN bash -c '. $HOME/.nvm/nvm.sh; nvm use stable

RUN mkdir -p $HOME/.vim/bundle\
 && git clone https://github.com/Shougo/neobundle.vim $HOME/.vim/bundle/neobundle

VOLUME /src

ADD start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 3000
CMD ["/start.sh"]

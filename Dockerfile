FROM alpine

LABEL version="0.0.1"
LABEL repository=""
LABEL maintainer="Ruben"
LABEL "com.github.actions.name"="github vulnerability check"
LABEL "com.github.actions.description"="github vulnerability check"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="red"

WORKDIR /home

COPY . /home

RUN apk update \
    && apk add curl nodejs npm \
    && npm install

COPY entrypoint.sh /home/entrypoint.sh
ENTRYPOINT ["sh", "/home/entrypoint.sh"]
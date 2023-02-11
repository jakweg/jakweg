FROM alpine:3.17.0
WORKDIR /app
RUN apk update && apk add nodejs npm git imagemagick
RUN npm i esbuild --location=global
COPY webhook-src src
RUN esbuild src/index.ts --outdir=. --platform=node --out-extension:.js=.mjs
CMD node ./index.mjs
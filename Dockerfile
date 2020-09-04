FROM node:12.18.3-alpine3.11 as base

RUN apk upgrade && apk --no-cache add --upgrade

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app

FROM base as dev
RUN npm i
COPY ./ /app
EXPOSE 3000
CMD ["npm", "run", "dev"]

# FROM base as prod
# EXPOSE 5000
# RUN npm run vercel-build
# CMD ["node", "server.js"]

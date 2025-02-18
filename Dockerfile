FROM node:20.11.0

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]
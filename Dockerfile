FROM node:alpine

WORKDIR /home/callroschel/WebProjects

COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 3333

CMD ["yarn", "dev"]

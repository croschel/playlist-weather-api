FROM node:lts-alpine

WORKDIR /home/callroschel/WebProjects

COPY package*.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]

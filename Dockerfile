### From https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ 
### Se også https://github.com/Unitech/pm2
FROM node:12
WORKDIR /usr/src/app
### Dependencies
COPY package*.json ./
RUN npm install
### App source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]



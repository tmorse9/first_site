FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g bower
RUN bower install --allow-root
EXPOSE 8080
CMD [ "npm", "start" ]

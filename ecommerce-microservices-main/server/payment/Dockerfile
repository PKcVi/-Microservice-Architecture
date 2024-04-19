FROM node:21.4.0

WORKDIR /usr/src/app

COPY ./../package*.json ./

RUN npm install

COPY ./../ .

EXPOSE 3004

CMD ["node", "app.js"]

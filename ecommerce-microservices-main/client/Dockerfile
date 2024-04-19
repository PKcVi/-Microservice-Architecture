FROM node:21.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV REACT_APP_AUTH_API_URL=http://localhost:3001
ENV REACT_APP_PRODUCT_API_URL=http://localhost:3002
ENV REACT_APP_INVENTORY_API_URL=http://localhost:3005
ENV REACT_APP_ORDER_API_URL=http://localhost:3003
ENV REACT_APP_PAYMENT_API_URL=http://localhost:3004
ENV REACT_APP_ANALYTICS_API_URL=http://localhost:3006

CMD ["npm", "start"]

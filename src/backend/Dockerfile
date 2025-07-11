FROM node:22.9-alpine3.19

WORKDIR /usr/todo_app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
FROM node:20.9.0

WORKDIR /app
COPY src src
COPY package*.json ./
COPY ./tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

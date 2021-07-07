FROM node:13.7


WORKDIR /app

COPY package.json .

COPY ["package.json", "package-lock.json", "./"]

RUN npm i --production

COPY . .

EXPOSE 9000

CMD ["npm", "run", "start"]
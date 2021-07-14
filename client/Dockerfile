FROM node:13.7

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
FROM node:13.7


WORKDIR /app

COPY package.json .

COPY ["package.json", "package-lock.json", "./"]

RUN npm i

COPY . .

EXPOSE 9000

CMD ["npm", "run", "dev"]
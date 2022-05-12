From node:14.17.3-alpine3.14

WORKDIR /app

COPY package*.json /app/

COPY . /app/

#ENV PG_HOST 'psql_container'
#ENV PG_PORT 5432

RUN npm install

EXPOSE $port


CMD ["node", "app.js"]
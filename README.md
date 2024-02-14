# In progress ....

## Book REST API.

API

DONE:

- get books ✅
- get book by id ✅
- update book ✅
- update last page ✅
- create book ✅

IN PROGRESS:

- swagger ❌
- tests ❌
- pagination ❌
- authorization/authtentication ❌

STEPS TO START:

1. clone the ripo
   To Start run:
2. from the root dir run: `npm install`

### Option 1: If you have docker-compose installed and docker runned

3. from the root dir run: `docker-compose up` it will starts postgres local server in a new container

4. from the root dir run: `npm run dev`

### Option 2: If you do not have docker and docker compose

3. install postgres server locally in you computer.

- you can see postgres credentials (in .env.example file):
  database = books
  username = root
  password = root
  host = localhost
  port = 5432

  ### Finally:

4. from the root dir run: `npm run dev`

you can test api on port
http://localhost:8080/api/books

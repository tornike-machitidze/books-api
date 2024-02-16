# In progress ....

## Book REST API.

API

DONE:

- swagger ✅
- get books / pagination ✅
- get book by id ✅
- update book ✅
- update last page ✅
- create book ✅
- authorization/authtentication ✅

IN PROGRESS:

- tests ❌ (in progress ...)
- store book content as pages ❌ (in progress ...)

STEPS TO START:

1. clone the ripo

2. create .env and copy everything from .env.example file

3. from the root dir run: `npm install`

### Option 1: If you have Docker

4. from the root dir run: `docker-compose up` it will starts postgres local server and awagger ui

5. from the root dir run: `npm run dev`

### Option 2: If you do not have Docker

4. install postgres server and swagger ui locally in you computer.

- you can see postgres credentials (in .env.example file):
  database = books
  username = root
  password = root
  host = localhost
  port = 5432

  ### Finally:

5. from the root dir run: `npm run dev`

you can test api on port

Swagger: http://localhost:8081/swagger

API: http://localhost:8080/api/books

## Tests

run: `npm run test`

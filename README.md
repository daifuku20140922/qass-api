# QASS-API

QASS is Qrcode based ASset-management System

## Framwork and Libraries

- Node JS
- Express
- Nest JS
- Prisma
- class-validator

## Running the app

```bash

# run container
$ docker compose up -d

# attach shell
$ docker compose exec api /bin/bash

# install dependencies
$ npm install

# running app
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

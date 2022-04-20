## Description

[Nest](https://github.com/nestjs/nest) application that serves a phone catalog API.

<-- [Trello Board](https://trello.com/b/5BVazCM1/phone-catalog) -->

It uses Typescript, MongoDB with Mongoose as database and Jest for testing

Also it uses [Cloudinary](https://cloudinary.com/) free tier to host the phone images

## Installation

```bash
$ yarn
```

## Environments file

You have to create a .env file following the template on /.env.example

```
DATABASE_HOST=
DB_USER=
DATABASE_PASSWORD=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Running the app

```bash
# development without database
$ yarn dev

# production mode
$ yarn start:prod
```

## Running the app with docker compose

```bash
# .env file
  PROTOCOL=mongodb://
  DB_HOST=mongo:27017
  DB_NAME=/admin
  DB_USER=admin
  DB_PASSWORD=password

# build
$ docker build .

# start container
$ docker compose up -d
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Stay in touch

- Author - [Carlos Díaz](https://github.com/linkmetal)

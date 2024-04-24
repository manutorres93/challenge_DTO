<p align="center" >
  <a href="https://riwi.io/" target="blank"><img src="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo.png" width="500" alt="RIWI Logo" /></a>
</p>
  <h1 align="center"> Nest.Js DTO Challenge</h1>  

## Description

The objective is to implement a Bank Transfer Management System using NestJS, focusing on creating a robust CRUD (Create, Read, Update, Delete) API for managing bank transfers. The purpose of this task is to reinforce the understanding of NestJS fundamentals and enhance skills in defining types and Data Transfer Objects (DTOs).

## Installation

```bash
$ npm install

# npm reads the package.json file in the project and looks for all the dependencies listed in it. Then, it downloads those dependencies from the npm registry.
```

## Running the app

```bash
# development         
$ npm run start          

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Using Postman

You can find the Postman collection in the root of the project under the name "Challenge.postman_collection.json". Also is published in https://documenter.getpostman.com/view/24858364/2sA3BrYVhD

## Using Swagger

You can also find the documentation for the CRUD in http://localhost:3000/documentation, once the app is running.


## Solution for the challenge

An initial project is received, lacking the strong typing that TypeScript requires, with an empty array simulating the database, without data persistence, entity, or DTOs.

* As a first step, we create the entities folder, and within it, transfer.entity.ts, where "transfer" will be the name of our entity. In this file, the schema of our entity is defined.
* Following this, we proceed with the creation of DTOs. Within the folder, we create subfolders for common, request, and response. We create a DTO for each using the necessary imports, which, based on our criteria, were needed, ignoring or adding properties as needed.
* Next, we verify the business logic and make necessary modifications to the services. Since we decided to use persistence later on, we remove the array simulating the database and modify the business logic accordingly.cio.
* We move to the controller where we adjust the methods to fit the business logic.
* We verify the module imports and organize what is necessary there.
* We create the .env file with its environment variables.
* We create the persistence folder and configure the db-config.ts file to encapsulate the database configuration in one place.
* In this persistence folder, we also create the persistence module, which is responsible for configuring the connection to the database.
* Application verification via Postman.


## Presented by

Miguel Angel Rivera - [@Angel98981](https://github.com/Angel98981)

Manuela Torres - [@manutorres93](https://github.com/manutorres93)




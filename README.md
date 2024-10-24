# **Advanced Single Page Application Development-FullStack Project**

A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. Unlike traditional multi-page applications (MPAs) where each action or page request triggers a full reload, SPAs use JavaScript to fetch new data and update the user interface (UI) without requiring a page refresh. This leads to faster, more fluid interactions that feel more like a native application.

## **Monorepo Management with Yarn**

In this project, we utilize **Yarn** as our package manager to facilitate a **monorepo** structure. A monorepo allows us to manage multiple related projects within a single repository, simplifying dependency management and improving collaboration among development teams.

## **Features**

-working Common soon

## **Tech Used**

- **_Yarn_** - **MonoRepo**
- **_ReactJS_** - **Frontend**
- **_NodeJs_** - **Framework**
- **_Express_** - **Backend**
- **_REST_** - **Architectural style for APIs**
- **_Docker_** - **For Containerization**
- **_Typescript_**
- **_Mongo Db_** - **No Sql Database**

## **Installation**

Advanced Single Page Application requires **NodeJs(https://nodejs.org/) v18+** to run.

Install the dependencies and devDependencies and start the server.

```sh
cd pratik-mern
yarn install
yarn start - It will start both services because concurrently is used

```

## **Environment Variables**

```sh
# MongoDB credentials
MONGO_INITDB_ROOT_USERNAME= YOUR_MONGO_DB_USERNAME
MONGO_INITDB_ROOT_PASSWORD= YOUR_MONGO_DB_PASSWORD
MONGO_INITDB_ROOT_DATABASE= YOUR_MONGO_DB_NAME
MONGO_URI=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@db:27017/${MONGO_INITDB_ROOT_DATABASE}


# Backend running env
NODE_ENV= development

# Backend running port
BACKEND_PORT=4000

# Frontend running port
FRONTEND_PORT=4001

```

```













```

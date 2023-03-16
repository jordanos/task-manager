# Task manager

1. This repository contains both back-end and front-end side scripts of a task manager application that runs on the web.<br>
2. The `/api` folder contains a script that runs on the server and `/web` contains everything running on front-end side.<br>
3. I've used MERN stack: express and mongodb for the API, ReactJS for the webapp.<br>

![task manager image](./docs/task-manager.png?raw=true)

# Build

1. This build requires Node, npm/yarn and mongodb.

### One time installation:

1. Install NodeJS on your system. you can find more about NodeJS [here](https://nodejs.org/en).<br>
2. To install the dependancies you can use either npm or yarn, I recommand yarn though.<br>
3. Open the `/api` directory and run `yarn install` command which will install all the required dependancies for the API.<br>
4. Open the `/web` directory and run `yarn install` command which will install all the required dependancies for the webapp.<br>
5. Before running the API you will need to create a `.env` file inside `/api` folder and provide: MONGO_URI, PORT and SECRET_KEY enviroment variables.<br>
6. Final step: Open the `/api` folder and run `yarn start` this will start the API server at the port you specified in the `.env` file. Simultaniously log into the `/web` folder and run `yarn start` this will start the webapp at port 3000.

### Tests

1. To run tests on the API you can use `yarn test` command. This will execute all the unit and integration tests residing in the `/api` folder.

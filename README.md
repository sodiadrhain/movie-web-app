# Movie Web App

A web app that lists and searches movies.

## Development Environment

### Setup

Ensure you have the following softwares installed:

- [Node](https://nodejs.org)
- [Docker](https://docs.docker.com/install/) (if you need to run as container)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

Clone the [repository](https://github.com/sodiadrhain/movie-web-app.git) and proceed with the instructions below.

### Running App locally

This app is written with Vuejs so Nodejs powers it; Enter the folloeing commands to start app locally

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Open browser and visit

```
http://localhost:8080
```

## Running as Docker Container

**From within the project directory run the following:**

```
yarn docker:bash
```

to build image and container for app

when this is done, app will basically start on port `8080`.

### Viewing the running ports

Open a new terminal window and run the following command:

```
docker ps
```

You will be given a printout showing your running containers. Part of the printout should contain something like this:

```
.....   0.0.0.0:8080->8080/tcp,     movie_web_app

```

This tells you that the various machines exist "locally" at 0.0.0.0 and that the exposed web port have been mapped to port 8080.

### Stopping Container

To stop the docker development environment, issue the following command from the project root:

```
yarn docker:down
```

This will stop all the container and related to this project.

### Starting Container

To start the docker development environment another time run:

```
yarn docker:up
```

This will start the container again.

### View the Home Page

To load the homepage of the app, visit the url below in a browser:

    http://0.0.0.0:8080

Thus your adventure begins... The project is up and running.

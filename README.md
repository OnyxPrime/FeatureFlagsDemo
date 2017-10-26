# Feature Flags Demo
This project provides a simple look at getting started using Feature Flags to control the visibility and access to new features in development. Simply clone the project or download and extract the .zip to get started.

## Prerequisites
[Node.js and NPM](https://nodejs.org)
[Angular CLI](https://github.com/angular/angular-cli)
[.Net Core](https://www.microsoft.com/net/core)
[Docker CE](http://docker.com) 
Note: Docker is only needed if you want to run solutions inside docker containers. The docker compose file is configured to map the local dist and bin directories, so there is no need to rebuild the containers during the development phase.
[LaunchDarkly Account](https://launchdarkly.com)

## Angular App
In FeatureFlagsDemoApp directory,

- Run `npm install` to restore node modules

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ASP.Net Core Web Api
In FeatureFlagsDemoApi directory,

- Run `dotnet build` to restore packages and build solution

- Run `dotnet run` to run dev server

- Run `dotnet watch run` to run dev server in watch mode. The app will automatically build and reload if you change any of the source files

## Docker
In FeatureFlagsDemoApp directory,

- Run `npm install` to restore node modules

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


In root directory (FeatureFlagsDemo),

- Run `docker-compose build`
Note: On first run, this may take a while to complete as it is downloading the docker images for NGINX and ASP.Net Core

- Run `docker-compose up` to build the docker containers.

- Navigate to `http://localhost:8080` for the Angular application.

- Navigate to `http://localhost:5000/api/lego/ninjas` for the Web API.

## LaunchDarkly
LaunchDarkly provides a free 30-day trial.

- Login to LaunchDarkly

- Navigate to "Account settings"

- Copy the "Client-side ID" and replace `<YOUR_KEY_HERE>` in "environment.ts" and "environment.prod.ts" files

- Navigate to "Feature Flags"

- Add a new flag named `Lego Ninjago Search` and key `ln-search`

- Add a new flag named `Lego Ninjago API` and key `ln-api`
[![Build Status](https://travis-ci.org/bhavin-prajapati/react-redux-node-auth-starter.svg?branch=master)](https://travis-ci.org/bhavin-prajapati/react-redux-node-auth-starter)

# react-redux-node-auth-starter

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## `Sign In`
> ![Screenshot](client/public/signin.png?raw=true)

## `Register`
> ![Screenshot](client/public/register.png?raw=true)

## Client

- [Quick Setup](#quick-setup-for-client)
- [Client-side Libraries](#client-side-libraries)
- [Available Scripts](#available-client-scripts)
  - [npm run start](#npm-run-start)
  - [npm run test](#npm-run-test)
  - [npm run build](#npm-run-build)
  - [npm run coverage](#npm-run-coverage)
  - [npm run lint](#npm-run-lint)
  - [npm run eject](#npm-run-eject)

## Server

- [Quick Setup](#quick-setup-for-server)
- [Server-side Libraries](#server-side-libraries)
- [Available Scripts](#available-server-scripts)
  - [npm run db:create](#npm-run-db:create)
  - [npm run db:migrate](#npm-run-db:migrate)
  - [npm run db:seed](#npm-run-db:seed)
  - [npm run db:setup](#npm-run-db:setup)
  - [npm run start](#npm-run-start)

## Quick Setup for Client

In the project directory, you can run:

```sh
npm install
npm run start
```

## Client-side Libraries

* React
* Redux
* Bootstrap
* Jest
* Istanbul
* Axios

## Available Server Scripts

### `npm run start`

Runs the client in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner (Jest) in the interactive watch mode.<br>
Shows the test result with test coverage.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run coverage`

Runs Istanbul the test runner in the interactive watch mode.<br>
[https://istanbul.js.org/](https://istanbul.js.org/)

### `npm run lint`

Runs ESLint on the src folder as configured by .eslintrc<br>
You will see all lint errors in the console.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Quick Setup for Server

In the project directory, you can run:

```sh
npm install
npm run db:setup
npm run start
```
## Server-side Libraries

* NodeJS
* Express
* Sequalize
* Babel

## Available Server Scripts

### `npm run db:create`

Creates the database based on configuration. (server/db/config)<br>

### `npm run db:migrate`

Runs the migrations on the database. (server/db/migrations)<br>

### `npm run db:seed`

Runs the seeds on the database. (server/db/seeders)<br>

### `npm run db:setup`

Setup the whole database with one command.<br>

### `npm run start`

Runs the server in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## License

This source code is licensed under the MIT
license found in the [LICENSE](https://github.com/bhavin-prajapati/react-redux-node-auth-starter/blob/master/LICENSE)
file.

---
Made with ♥ by Bhavin Prajapati
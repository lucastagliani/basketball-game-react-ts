[![CircleCI](https://circleci.com/gh/lucastagliani/nba-info-react-ts/tree/main.svg?style=svg)](https://circleci.com/gh/lucastagliani/nba-info-react-ts/tree/main)

## Live website in Heroku

https://nba-info-react-ts.herokuapp.com/ (it might be offline after November 28th given Heroku free plan will no longer exist).

This app is automatically deployed using CircleCI each time the code gets pushed to GitHub.

## Motivation

I love coding and I love sports - mainly basketball and soccer. My idea with this project was to do 2-3 commits per week. It will evolve slowly but nicely.

## Disclaimer

This personal project was created for fun, it might not use the best tools or practices considered by me, but I use some of them for practicing and learning. For example, you will see that UI styles are set through style/css props, styled components and one css file.

## API

The API attached to this front-end applications is here: [nba-api-nodejs](https://github.com/lucastagliani/nba-api-nodejs)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You don't need to run the API locally because it will hit the production one.

### `npm run start:local-api`

The same as `npm start`, but now it will look for the local API under `http://localhost:8080`.

If that is your wish you will need to clone, install and run the below project to make it work!

[nba-api-nodejs](https://github.com/lucastagliani/nba-api-nodejs)

### `npm test`

Uses jest to run all unit tests.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

It shows up all code lines (if any) that are out of pattern based on eslint rules.

### `npm run lint:fix`

Same as the above, but it tries to fix them automatically before displaying it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

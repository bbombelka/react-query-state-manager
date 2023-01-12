_React query as state manager_

## Setup

Clone the repo, install dependencies using `npm i` command.

First start the mock server with `npm run server`

Then run the app `npm run start`

Happy coding !

## Available Scripts

In the project directory, you can run:

### `npm lint(:fix)`

Runs the linter (and fixes fixable issues)

### `npm plop`

Runs [Plop JS](https://plopjs.com/) used for generating custom hooks and react components.

### `e2e:run:firefox` or `e2e:run:chrome`

Runs Cypress E2E tests in a headless mode (the browser window is not visible)

### `e2e:open`

Opens the Cypress UI, allowing to run and watch E2E tests

### `e2e:ci:firefox` or `e2e:ci:chrome`

Builds the app as a CI environment, sets up an html server with `npm run serve` and runs the E2E tests in a headless
mode. Useful when investigating pipeline failures.

### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to view it in the
browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner in the coverage report generation mode.<br /> See
[this](https://create-react-app.dev/docs/running-tests/#coverage-reporting) section for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production mode and optimizes
the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

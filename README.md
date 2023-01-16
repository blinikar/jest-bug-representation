# Reproduction of Jest bug

This project made especially for Jest [issue](https://github.com/facebook/jest/issues/13761).

I reproduced this bug in this repository. In _jest.config.js_ file you can uncomment marked lines
to see that Jest is configured correctly and can find and run test files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Starts a Jest that **can't** find any test files on Windows workstations. 
_You can uncomment marked lines to fix the problem_
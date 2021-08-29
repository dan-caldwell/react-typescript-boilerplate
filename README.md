# react-typescript-boilerplate

This repo uses create-react-app, SCSS, and react-app-rewired to create a nicely organized React app boilerplate.

You can use aliases paths for easy importing (via `babel-plugin-module-resolver`, which is enabled with `customize-cra`). For example, you can import types from the types.ts file by simply doing something like:

```
import { TypeName } from "@types";
```

## Available aliases

You can create as many aliases as you want, but these are the pre-made ones.

```
    "@types": ["./types.ts"]
    "@components/*": ["./src/components/*"]
    "@src/*": ["./src/*"]
    "@styles/*": ["./src/styles/*"]
    "@hooks/*": ["./src/hooks/*"]
    "@ExampleContext": ["./src/context/ExampleContext.tsx"]
```

## Using Context

Context is also set up using a get/set method. 
When you create new state in context, use the useContextState hook along with the ContextState type to automatically create a get/set object. 
Example usage:

```
const App = () => {
    const { example } = useContext(ExampleContext);

    const handleClick = () => {
        example.set('new value');
    }

    return (
        <div className="App" onClick={handleClick}>
            {example.get}
        </div>
    )
}
```

## How to get started

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

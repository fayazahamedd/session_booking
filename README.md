# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- Dependencies
- This project utilizes several key dependencies:

## @reduxjs/toolkit: "^2.2.5" - For efficient state management with Redux.
- react: "^18.2.0" - Core library for building user interfaces.
- react-dom: "^18.2.0" - For rendering React components in the DOM.
- react-modal: "^3.16.1" - For creating accessible modal dialogs.
- react-redux: "^9.1.2" - Official React bindings for Redux.
- react-router-dom: "^6.23.1" - For declarative routing in React applications.
- Project Structure
- The project is organized into several directories:

## /src: Contains the source code.
## /pages: Contains the page components (HomePage, Sessions, Root, Session).
## /components: Contains reusable components such as modals.
## /store: Contains Redux store setup and slices.
## Running the Application
## After cloning the repository and installing dependencies, you can start the development server using npm start. This will run the application in development mode and open it in your default web browser. You can then navigate through the application using the defined routes.

## Contribution
-Feel free to fork the repository and submit pull requests. Contributions are welcome to enhance the features and improve the code quality of this project.



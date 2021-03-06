### Quick Start

* Node.js with NPM or Yarn installed.

* DB initialization:
  ```sql
  
  ```

* Install dependencies by running: `yarn` or `npm install`.

* Start server by running: `npm run server`.

* Start client by running: `npm start`.

* Visit in browser at: `localhost:3000`.


### Project Structure

- UI is constructed from an open source project: [Shards-Dashboard-Lite-React](https://designrevision.com/downloads/shards-dashboard-lite-react/)
- This project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
- **Flux** is used for state management and all Flux specific files are located inside `src/flux`. Transitioning to a more robust solution such as Redux is also fairly simple.
- All primary templates are located inside `src/views`.
- There is only one single layout defined (Default) inside `src/layouts`, however, the current structure provides an easy way of extending the UI kit. 
- The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
- The layout styles inherited from Shards Dashboard are pulled in from the `src/shards-dashboard` submodule inside `src/App.js`.
- Other extra styles specific to the libraries used are located inside `src/assets`.
- The `src/utils` directory contains generic Chart.js utilities.


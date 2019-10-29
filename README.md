# React starter project

Example project configured with `React`, `Typescript`, `Storybook`, and `styled-components`.
The project is built using `webpack`, `prettier` and `eslint`.

## Installation

To install the required modules run:

```javascript
yarn install --frozen-lockfile
```

### Style guide

To access storybook run:

```javascript
yarn storybook
```

The `storybook` style guide is running on [http:localhost:9009](http:localhost:9009).

### Development server

To start the development server run:

```javascript
yarn start
```

The application is running on [http:localhost:3001](http:localhost:3001).

### Production build

To build the project to run on any server run:

```javascript
yarn build
```

The project will be compiled into the `dist` folder.
The compiled output is targeting all browsers supporting `es2015` .

To build and test the compiled version of the project run

```javascript
yarn build-and-run
```

The application is running on [http:localhost:8080](http:localhost:8080).
# React-Component-Project

> A minimal project template for creating and publishing react components

![GitHub](https://img.shields.io/github/license/vahidtvj/react-component-project)

## Features
* [TypeScript](https://www.typescriptlang.org/)
* [Rollup](https://rollupjs.org/) for build process
* [Prettier](https://prettier.io/) for formatting
* [ESLint](https://eslint.org/) for code linting
* [Storybook](https://storybook.js.org/) component development
* [Next.js](https://nextjs.org/) as a demo project
* [GitHub Pages](https://pages.github.com/) hosting demo
* [EditorConfig](https://editorconfig.org/)

## Setup
* clone the repo or use `Use this template`
* run `yarn` to install necessary packages

## Development

### Testing
```
yarn lib:storybook
```
#### Demo app
```
yarn demo:dev
```

### Deploying demo
In order to deploy to GitHub Pages first change this line in `packages/demo/next.config.js` from:
```js
const basePath = process.env.NODE_ENV === 'production' ? '/react-component-project' : ''
```
To:
```js
const basePath = process.env.NODE_ENV === 'production' ? '/<your repository name>' : ''
```
Then you can run `yarn demo:deploy`

Visit [Next.js Docs](https://nextjs.org/docs/advanced-features/static-html-export) for more information about static HTML generation in Next.js

### Publishing to npm
* Login to your npm account `npm login`
* `npm run lib:publish`

[![Build Status][travis-image]][travis-url]
[![Codecov Coverage][codecov-image]][codecov-url]
[![Maintainability][codeclimate-image]][codeclimate-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Dependency Status][dependency-status-image]][dependency-status-url]
[![devDependency Status][dev-dependency-status-image]][dev-dependency-status-url]

# Captain's React Starter Recipe

Welcome to the Captain's React Starter recipe. This is what I load up to get 0 to 60; when I need to whip up a fondue fast.

## Table of Contents

- [Features](https://github.com/CaptainCodex/captains-react-starter-recipe#features)
- [The Ingredients](https://github.com/CaptainCodex/captains-react-starter-recipe#the-ingredients)
- [NPM Scripts](https://github.com/CaptainCodex/captains-react-starter-recipe#npm-scripts)
- [Ajax](https://github.com/CaptainCodex/captains-react-starter-recipe#ajax)

## Features

- Folder structure ready to scale.
- Ajax-ready Redux with edge cases handled.
- Pre-commit auto-prettier and testing.
- 100% code coverage and README badges.
- Storybook set up with knobs and essential plugins, even a proxy for API calls.
- Full-blown e2e and unit testing with Nock API calls. Mounts real store and reducers.
- Fully wired Redux, Typesafe Actions and TS setup with Async Actions.
- TS Lint that enforces safety without nagging about your life choices.
- ...and a bunch of best practices from top chefs.

## The Ingredients

- TypeScript
- React
  - Router
- Redux
  - Typesafe Actions
  - Reselect
  - Redux Observable
    - Backoff RxJS
    - Ajax RxJS
    - Services
  - Redux Logger
- TS Lint
  - Prettier
    - Plugin
    - Config
  - Pretty Quick
- Husky
- Storybook
- CSS
  - SCSS
  - Bootstrap
  - Reactstrap
- Utils
  - Classnames
  - Lodash
  - Moment
  - Humanize Plus
  - RxJS
- Testing
  - Jest (with coverage)
  - Enzyme
  - Nock
- Travis CI
  - Codecov
- Badges

## NPM Scripts

```
Start: npm start

Build: npm build

Jest Tests: npm test[:watch]

Storybook: npm storybook
```

## Ajax

- Provides the option to cancel previous connections to the same URL.
- Error out after a reasonable timeout to prevent hung requests.
- Retry on errors with an expononentially growing delay between attempts.
- If nothing is going right, we can catch the error after the final attempt.

[travis-image]: https://travis-ci.org/CaptainCodex/captains-react-starter-recipe.svg?branch=master
[travis-url]: https://travis-ci.org/CaptainCodex/captains-react-starter-recipe
[greenkeeper-image]: https://badges.greenkeeper.io/CaptainCodex/captains-react-starter-recipe.svg
[greenkeeper-url]: https://greenkeeper.io/
[dependency-status-image]: https://david-dm.org/CaptainCodex/captains-react-starter-recipe/master.svg
[dependency-status-url]: https://david-dm.org/CaptainCodex/captains-react-starter-recipe.svg
[dev-dependency-status-image]: https://david-dm.org/CaptainCodex/captains-react-starter-recipe/master/dev-status.svg
[dev-dependency-status-url]: https://david-dm.org/CaptainCodex/captains-react-starter-recipe/master#info=devDependencies
[codecov-image]: https://img.shields.io/codecov/c/github/CaptainCodex/captains-react-starter-recipe/master.svg
[codecov-url]: https://codecov.io/gh/CaptainCodex/captains-react-starter-recipe
[codeclimate-image]: https://api.codeclimate.com/v1/badges/544ec1bebabf86cecfe7/maintainability
[codeclimate-url]: https://codeclimate.com/github/CaptainCodex/captains-react-starter-recipe/maintainability

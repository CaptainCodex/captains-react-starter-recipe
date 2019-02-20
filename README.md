[![Build Status](https://travis-ci.org/CaptainCodex/captains-react-starter-recipe.svg?branch=master)](https://travis-ci.org/CaptainCodex/captains-react-starter-recipe)
[![Known Vulnerabilities][snyk-image]][snyk-url]

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
- 100% code coverage.
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

[snyk-image]: https://snyk.io/test/github/CaptainCodex/captains-react-starter-recipe/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/github/CaptainCodex/captains-react-starter-recipe

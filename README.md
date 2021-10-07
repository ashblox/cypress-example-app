# Shadow Dom Problem

## Description

This repository was created to help the Cypress team resolve an [issue](https://github.com/cypress-io/cypress/issues/18401) I created.

Cypress allows you to "includeShadowDom" at a global level (in your `cypress.json`) but also [doesn't retry all commands in a chain](https://docs.cypress.io/guides/core-concepts/retry-ability#Only-the-last-command-is-retried). The suggested workaround is to use a combined query, but this doesn't work with shadow dom nesting.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/) in an open browser.

Run `npm run e2e:ci` to execute the end-to-end tests in headless mode.

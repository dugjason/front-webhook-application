# Getting started with Front Webhooks

This repository complements the [Front Webhooks](https://dev.frontapp.com/docs/webhooks-1) tutorial. Refer to the tutorial for specifics about how to work with Front Webhooks.

## Available scripts and installation

In the project directory, you can run the following commands:

### `npm install`

Installs dependencies.

### `npm run start`

Runs the app from the production build.

### `npm run build`

Uses `tsc` to build a production-ready version of your app.

### `npm run dev`

Build + runs the app; useful for quick restarts during development.

## Framework

This uses [Express](https://expressjs.com/) as a fast and minimalist framework to handle incoming webhook calls. We make use of [Express Middleware](https://expressjs.com/en/guide/using-middleware.html) to perform validation and verification on incoming requests.

## (Local Development) Exposing your endpoint

For local development, you can use tools like [ngrok](https://ngrok.com/), [zrok.io](https://zrok.io/) or [localcan](https://localcan.com/) to expose your local server to the internet. After installing ngrok, run `ngrok http 3000` to create a public URL that forwards to your local server.

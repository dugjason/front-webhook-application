# Getting started with Front Application Webhooks

This repository complements the [Front Application Webhooks](https://dev.frontapp.com/docs/application-webhooks) tutorial. Refer to the tutorial for specifics about how to work with Front Application Webhooks.

This sample app should provide you with a basic template to help scaffold your own Application Webhooks, including secure verification of payload content. 

## Available scripts and installation

In the project directory, you can run the following commands:

Install dependencies.
```bash
npm install
```

Run the app in development mode; useful for quick restarts during development.
```bash
npm run dev
```

Builds a production-ready version of your app.
```bash
npm run build
```

Run the built production version of the app.
```bash
npm run start
```

## Framework

This uses [Express](https://expressjs.com/) as a fast and minimalist framework to handle incoming webhook calls. We make use of [Express Middleware](https://expressjs.com/en/guide/using-middleware.html) to perform validation and verification on incoming requests.

## Exposing your endpoint (Local Development) 

For local development, you can use tools like [ngrok](https://ngrok.com/), [zrok.io](https://zrok.io/) or [localcan](https://localcan.com/) to expose your local server to the internet. 
If using ngrok, run `ngrok http 3000` to create a public URL that forwards to the app running locally on your machine at port 3000.

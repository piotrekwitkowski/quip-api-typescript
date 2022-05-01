# quip-api-typescript

[![codecov](https://codecov.io/gh/piotrekwitkowski/quip-api-typescript/branch/main/graph/badge.svg?token=T2G2GO9T9K)](https://codecov.io/gh/piotrekwitkowski/quip-api-typescript)
[![npm version](https://badge.fury.io/js/quip-api-typescript.svg)](https://www.npmjs.com/package/quip-api-typescript)

This is the unofficial Node.js library to access the [Quip Automation API](https://quip.com/api/).

## Notice 

This library should be considered as Work In Progress. The official [quip-api library](https://github.com/quip/quip-api/) wasn't updated recently and isn't maintained anymore, so I created this one that is more convenient to use thanks to typings and promises.

## Installation

`npm i quip-api-typescript`

## Usage

For now, the library supports only access token auth (no OAuth).

```ts
import { QuipClient } from 'quip-api-typescript';

const ACCESS_TOKEN = 'your-access-token';
const client = new QuipClient(ACCESS_TOKEN);

// use like this
client.threads.getThreadHtmlV2({ id: '' }).then(response => doSomething(response));

// or this
client.users.getUser({ id: 'john@acme.com' }).then(response => doSomething(response));
```

## Documentation

More methods, request and response types can be found in the [documentation](https://piotrekwitkowski.github.io/quip-api-typescript/).

## Official Quip API Docs

* [Quip Automation API Reference](https://quip.com/api/reference)
* [Get a Personal Automation API Access Token](https://quip.com/api/personal-token)

## Contributing

PRs are welcome! Please feel encouraged to star this repo too!

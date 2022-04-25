# quip-api-typescript

[![codecov](https://codecov.io/gh/piotrekwitkowski/quip-api-typescript/branch/main/graph/badge.svg?token=T2G2GO9T9K)](https://codecov.io/gh/piotrekwitkowski/quip-api-typescript)

This is the unofficial TypeScript-compatible and promise-based library to access the [Quip Automation API](https://quip.com/api/). 

## Notice 

This library should be considered as Work In Progress. The [official Quip Node library](https://github.com/quip/quip-api/) wasn't updated in the last 6 years, so I created this one that is much more convenient to use thanks to typings and promises.

## Installation

`npm i quip-api-typescript`

## Usage

For now, the library supports only access token auth (no OAuth).

```ts
import { getQuipClient } from 'quip-api-typescript';

const ACCESS_TOKEN = 'your-access-token';
const client = getQuipClient(ACCESS_TOKEN);

// use like this
client.threads.getThreadHtmlV2({ id: '' }).then(response => console.log(response.html)); 
```

## Official Docs 

* [Quip Automation API Reference](https://quip.com/api/reference)
* [Get a Personal Automation API Access Token](https://quip.com/api/personal-token)

## Contributing

PRs are welcome! Please feel encouraged to star this repo too!

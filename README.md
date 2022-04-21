# quip-api-typescript

This is the unofficial and incomplete, but TypeScript-compatible and promise-based library to access the [Quip Automation API](https://quip.com/api/).

* [Quip Automation API Reference](https://quip.com/api/reference)
* [Get a Personal Automation API Access Token](https://quip.com/api/personal-token)

## Usage

For now, the library supports only access token auth (no OAuth).

```ts
import { Client } from 'quip-api-typescript';

const ACCESS_TOKEN = 'your-access-token';
const client = new Client(ACCESS_TOKEN);

// use like this
client.getThreadHtmlV2.then(response => console.log(response.html)); 
```

## Contributing

Please feel encouraged to submit Pull Requests!

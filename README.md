Typescript SDK for The Lord of the Rings API

# Access Token

Before using the SDK, you'll need to get an access token from [https://the-one-api.dev/sign-up](https://the-one-api.dev/sign-up)

# Installation

```
npm i @alexortizrosado/lord-of-the-rings-sdk
```

# Usage

To get a catalog of books:

```js
import { LotrApi } from "@alexortizrosado/lord-of-the-rings-sdk";

const client = new LotrApi("your-access-token");

const books = await client.Book.catalog({
  limit: 3,
});
```

To get a list of quotes from a character:

```js
import { LotrApi } from "@alexortizrosado/lord-of-the-rings-sdk";

const client = new LotrApi("your-access-token");

const books = await client.Quote.getQuotesByCharacter(
  "5cf5805fb53e011a64671582",
  {
    limit: 5,
  }
);
```

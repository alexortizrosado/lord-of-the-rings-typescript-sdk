## Typescript SDK Design Decisions

1. The SDK uses axios as for HTTP communition. Axios provides a nicely type-scripted interface that is used in the SDK for returns. NOTE: axios 1.0+ has a bug that causes it to throw an error of `TypeError: Cannot read properties of undefined (reading 'create')`. The axios object is not exported. This is not broken in earlier versions, so this SDK is locked to axios `"axios": "0.27.2"` in `package.json`

2. Error handling is done in `src/Error.ts`. The SDK will only thrown an error if the API rejects the request due to a missing access token. Other errors will be caught and swallowed, allowing for the data to return as "undefined".

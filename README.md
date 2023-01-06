# logger

This is a shared (wrapper) logger library, based on pino and console, aiming to consolidate logging features across multiple microservice components.

## DEV

Check code inside `src`.

### requirements for dev

* Node v16+

### install, build, test

```sh
npm run install
npm run build

# check tests inside src/__tests__
npm run test
npm run test:coverage
```

Current code coverage:

```plain
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |   93.26 |    73.33 |     100 |   97.59 |                   
 src              |     100 |      100 |     100 |     100 |                   
  types.ts        |     100 |      100 |     100 |     100 |                   
 src/logger       |   95.12 |    64.28 |     100 |   94.28 |                   
  constants.ts    |     100 |      100 |     100 |     100 |                   
  factory.ts      |     100 |       75 |     100 |     100 | 16-17             
  index.ts        |     100 |      100 |     100 |     100 |                   
  utils.ts        |    91.3 |       50 |     100 |   88.88 | 24,40             
 src/logger/kinds |    90.9 |    74.07 |     100 |     100 |                   
  console.ts      |   84.21 |    63.63 |     100 |     100 | 13-29             
  pino.ts         |   94.44 |    81.25 |     100 |     100 | 8,22,32           
------------------|---------|----------|---------|---------|-------------------
```

## USAGE

### requirements for usage

* Node v14+

### installation

```sh
npm i @xplora-uk/logger
```

### configuration

```typescript
import { newLogger } from '@xplora-uk/logger';
import { randomUUID } from 'crypto';

// configure and load
const app = { app_name: 'my-api', app_version: '1.0.0', env: 'staging' };
const logger = newLogger({ app });
//const logger = newLogger({ app, kind: 'pino', level: 'info' }); //default


// collect info, e.g. get header value using express request
const client_id  = req.get('x-api-key');
const request_id = req.get('x-request-id') || randomUUID();

// log simple messages or objects; date, time will be included
logger.info('POST /my-end-point'); // log string

logger.info({ msg: 'POST /my-end-point', client_id, request_id }); // log object

// or with level check; faster if level is not enabled
if (logger.isLevelEnabled('debug')) {
  // example: extract URL query parameters and request body
  const { query, body } = req;
  const data = { query, body }; // TODO: remove sensitive data points
  logger.debug({ msg: 'POST /end-point', client_id, request_id, data });
}
```

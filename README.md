# @webb/order-object

> Make sure your Object keys are in alphabetical order



## Install

```sh
$ npm i @webb/order-object
```



## Usage

```js
// Import the default export
import orderObject from "@webb/order-object";

orderObject({ zebra: "yay", 1: "neo", horse: "neigh" });
// ^ Returns { "1": "neo", horse: "neigh", zebra: "yay" }
```

```js
// Or, export the named function
import { order } from "@webb/order-object";

order({ zebra: "yay", 1: "neo", horse: "neigh" });
// ^ Returns { "1": "neo", horse: "neigh", zebra: "yay" }
```



## API

### order(suppliedObject)
#### suppliedObject

Type: `object` (required)

- If nothing is supplied, the response is `null`.
- If you supply anything that is not an object, whatever you supplied is returned unchanged.



## Tests

```sh
# Run all tests, sequentially
$ npm test

# Test dependencies for latest versions
$ npm run test:dependencies

# Lint "src" directory
$ npm run test:typescript

# Test this module
$ npm run test:assert
```



## Thanks

[Maggie Shemayev](https://github.com/aleph-naught2tog) has a number of useful gists and this module is inspired by [one](https://gist.github.com/aleph-naught2tog/938dd20dfc53e91da952569fd5655e2d) of them.

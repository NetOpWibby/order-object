# @netopwibby/order-object

Ever get annoyed when your `Object` keys aren't in alphabetical order? No? Just me?



## Installation

```sh
# deno
deno add jsr:@netopwibby/order-object

# node
npx jsr add @netopwibby/order-object
```



## Usage

```ts
// deno
import { orderObject } from "jsr:@netopwibby/order-object";

// node
import { orderObject } from "@netopwibby/order-object";

console.log(orderObject({ zebra: "yay", 1: "neo", horse: "neigh" }));
// returns { "1": "neo", horse: "neigh", zebra: "yay" }
```



### Running Tests

```sh
# lint all TypeScript files
deno lint

# type-check file
deno check mod.ts
deno check test.ts

# run the tests in `test.ts`
deno test
```



## License

MIT



## Prior Art

- [@webb/order-object](https://github.com/NetOpWibby/order-object/tree/node.js): I made this when Node.js was my best friend. Now Deno is my best friend.

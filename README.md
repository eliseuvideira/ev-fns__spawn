# @ev-fns/spawn

Async spawn that outputs to stdout

- spawn `(cmd: string) => Promise<void>`

## Install

```sh
yarn add @ev-fns/spawn
```

## Usage

```js
const { spawn } = require("@ev-fns/spawn");

spawn("Hello World 👋 && sleep 1").then(() => console.log("Finished"));
```

# @ev-fns/exec

Async exec that outputs to stdout

- exec `(cmd: string) => Promise<void>`

## Install

```sh
yarn add @ev-fns/exec
```

## Usage

```js
const { exec } = require("@ev-fns/exec");

exec("Hello World 👋 && sleep 1").then(() => console.log("Finished"));
```

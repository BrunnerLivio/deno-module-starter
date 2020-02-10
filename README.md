# 🦕 deno-lib-starter

[Deno](https://deno.land) library starter repository.

## Usage

```typescript
import { getHelloWorld } from "https://raw.githubusercontent.com/BrunnerLivio/deno-lib-starter/{VERSION}/mod.ts";

const helloWorld = getHelloWorld();
console.log(helloWorld); // Prints "Hello World"
```

## Test

```bash
# unit tests
deno ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```

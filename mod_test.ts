import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { getHelloWorld } from "./mod.ts";

Deno.test("get hello world", () => {
  assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});

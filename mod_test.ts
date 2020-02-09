import { test, assertEquals } from "./test_deps.ts";
import { getHelloWorld } from "./mod.ts";

test(function test_get_hello_world() {
  assertEquals(getHelloWorld(), "Hello World");
});

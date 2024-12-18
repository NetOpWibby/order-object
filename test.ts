


//// import

import { assertEquals } from "jsr:@std/assert";

//// util

import { orderObject } from "./mod.ts";



//// program

Deno.test("Test orderObject", async(t) => {
  await t.step("Returns null when no options are supplied", () => {
    assertEquals(orderObject(), null);
  });

  await t.step("Returns empty array when supplied the same", () => {
    assertEquals(orderObject([]), []);
  });

  await t.step("Returns empty object when supplied the same", () => {
    assertEquals(orderObject({}), {});
  });

  await t.step("Returns ordered object", () => {
    const options = {
      zebra: "yay",
      1: "neo",
      horse: "neigh"
    };

    const expectedResponse = {
      "1": "neo",
      horse: "neigh",
      zebra: "yay"
    };

    assertEquals(orderObject(options), expectedResponse);
  });
});

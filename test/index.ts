


//  N A T I V E

import assert from "assert";

//  I M P O R T

import Test from "@webb/test";

//  U T I L S

import orderObject from "../dist";
import { order } from "../dist";



//  T E S T S

const test = Test("@webb/order-object");

test("Returns null when no options are supplied", () => {
  assert.deepStrictEqual(orderObject(), null);
});

test("Returns array when supplied the same", () => {
  assert.deepStrictEqual(orderObject([]), []);
});

test("Returns empty object when supplied the same", () => {
  assert.deepStrictEqual(orderObject({}), {});
});

test("Returns ordered object", () => {
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

  assert.deepStrictEqual(orderObject(options), expectedResponse);
});

test("Returns null when no options are supplied, using exported function", () => {
  assert.deepStrictEqual(order(), null);
});

test("Returns array when supplied the same, using exported function", () => {
  assert.deepStrictEqual(order([]), []);
});

test("Returns empty object when supplied the same, using exported function", () => {
  assert.deepStrictEqual(order({}), {});
});

test("Returns ordered object, using exported function", () => {
  const options = {
    zebra: "neigh",
    1: "neo",
    horse: "neigh"
  };

  const expectedResponse = {
    "1": "neo",
    horse: "neigh",
    zebra: "neigh"
  };

  assert.deepStrictEqual(order(options), expectedResponse);
});



test.run();

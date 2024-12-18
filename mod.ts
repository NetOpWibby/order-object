


//// util

type OrderableValue = string | number | boolean | null | undefined | OrderableObject | OrderableValue[];

interface OrderableObject {
  [key: string]: OrderableValue;
}



//// export

/**
 * Recursively orders an object's keys and its nested objects alphabetically
 * ```ts
 * import { orderObject } from "jsr:@netopwibby/order-object";
 *
 * console.log(orderObject({ zebra: "yay", 1: "neo", horse: "neigh" }));
 * // returns { "1": "neo", horse: "neigh", zebra: "yay" }
 *
 * @param value - The value to order (object, array, or primitive)
 * @returns The ordered value, or the original value if not orderable
 */
export function orderObject<T extends OrderableValue>(value?: T): T | null {
  if (value === null || value === undefined)
    return null;

  if (Array.isArray(value)) // recursively order array elements
    return value.map(item => orderObject(item)) as T;

  if (typeof value !== "object")
    return value;

  const sortedKeys = Object.keys(value).sort();

  // recursively order key values
  const orderedObject = sortedKeys.reduce<OrderableObject>((result, key) => {
    const currentValue = (value as OrderableObject)[key];
    result[key] = orderObject(currentValue);

    return result;
  }, {});

  // preserve original object's prototype
  return Object.setPrototypeOf(
    orderedObject,
    Object.getPrototypeOf(value)
  ) as T;
}

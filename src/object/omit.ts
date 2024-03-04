/**
 * Creates a new object with the specified keys omitted.
 *
 * @param obj - The object from which to omit keys.
 * @param keys - An array of keys to omit from the object.
 * @returns A new object with the specified keys omitted.
 */
export function omit(obj: object, keys: string[]): object {
  if (keys.length === 0) {
    return obj;
  }

  const result: { [key: string]: any } = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

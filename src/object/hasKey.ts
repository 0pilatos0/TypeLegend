/**
 * Checks if an object has a specific key.
 *
 * @param obj - The object to check.
 * @param key - The key to check for.
 * @returns A boolean indicating whether the object has the specified key.
 */
export function hasKey(obj: object, key: string): boolean {
  return Object.hasOwn(obj, key);
}

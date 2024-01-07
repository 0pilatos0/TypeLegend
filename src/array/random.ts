/**
 * Returns a random element from the given array.
 * @param arr The array from which to select a random element.
 * @returns A random element from the array.
 */
export function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

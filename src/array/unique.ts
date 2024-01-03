/**
 * Returns an array with unique elements from the input array.
 * @param arr The input array.
 * @returns An array with unique elements.
 * @template T The type of elements in the array.
 */
export function unique<T>(arr: T[]): T[] {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

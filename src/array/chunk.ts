/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @template T The type of elements in the array.
 * @param arr The array to be chunked.
 * @param size The size of each chunk. Default is 1.
 * @returns An array of chunks, where each chunk is an array of elements from the original array.
 */
export function chunk<T>(arr: T[], size = 1): T[][] {
  if (size <= 0) {
    return arr.map((value) => [value]);
  }

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

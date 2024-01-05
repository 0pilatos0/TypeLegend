/**
 * Returns a random sample of elements from an array.
 * @param arr The array to sample from.
 * @param sampleSize The number of elements to include in the sample.
 * @returns An array containing a random sample of elements from the input array.
 */
export function sample<T>(arr: T[], sampleSize: number): T[] {
  const result: T[] = [];
  const arrCopy = [...arr];
  while (result.length < sampleSize && arrCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  }
  return result;
}

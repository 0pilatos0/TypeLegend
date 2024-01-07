/**
 * Shuffles the elements of an array in place.
 *
 * @param arr - The array to be shuffled.
 * @returns A new array with the elements shuffled.
 * @template T - The type of elements in the array.
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

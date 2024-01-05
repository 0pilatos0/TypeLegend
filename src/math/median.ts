/**
 * Calculates the median value of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The median value.
 */
export function median(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}

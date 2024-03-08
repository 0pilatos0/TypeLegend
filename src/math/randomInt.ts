/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns A random integer between the minimum and maximum values.
 */
export function randomInt(min: number, max: number): number {
  if (min > max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

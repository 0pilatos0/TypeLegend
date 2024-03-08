/**
 * Calculates the percentage of a number in relation to another number.
 *
 * @param a - The number to calculate the percentage of.
 * @param b - The total number to calculate the percentage against.
 * @returns The calculated percentage.
 */
export function percentOf(a: number, b: number): number {
  return (a / b) * 100;
}

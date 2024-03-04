import { gdc } from "./gdc";

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The least common multiple of `a` and `b`.
 */
export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }

  const absA = Math.abs(a);
  const absB = Math.abs(b);

  return (absA * absB) / gdc(absA, absB);
}

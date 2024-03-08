/**
 * Checks if date `a` is before date `b`.
 *
 * @param a - The first date to compare.
 * @param b - The second date to compare.
 * @returns `true` if `a` is before `b`, `false` otherwise.
 */
export function isBefore(a: Date, b: Date): boolean {
  return a.getTime() < b.getTime();
}

/**
 * Measures the execution time of a function.
 * @param fn - The function to be benchmarked.
 * @param args - The arguments to be passed to the function.
 * @returns The execution time in milliseconds.
 */
export function benchmark(fn: Function, ...args: any[]): number {
  const start = performance.now();
  fn(...args);
  const end = performance.now();

  return end - start;
}

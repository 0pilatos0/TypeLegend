/**
 * Measures the execution time of an asynchronous function.
 * @param fn - The asynchronous function to be benchmarked.
 * @param args - The arguments to be passed to the function.
 * @returns A promise that resolves with the execution time in milliseconds.
 */
export function benchmarkAsync(fn: Function, ...args: any[]): Promise<number> {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    fn(...args)
      .then(() => {
        const end = performance.now();
        resolve(end - start);
      })
      .catch(reject);
  });
}

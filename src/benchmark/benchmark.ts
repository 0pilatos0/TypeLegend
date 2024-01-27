/**
 * Measures the execution time of a function by running it multiple times.
 * @param fn The function to benchmark.
 * @param iterations The number of times to run the function (default: 1).
 * @param log Whether to log the benchmark result (default: true).
 * @param args Additional arguments to pass to the function.
 * @returns An object containing the total execution time and average execution time.
 */
export function benchmark(
  fn: Function,
  iterations: number = 1,
  log: boolean = true,
  ...args: any[]
): {
  total: number;
  average: number;
} {
  let executionPerIteration: number[] = [];
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    fn(...args);
    const end = performance.now();
    executionPerIteration.push(end - start);
  }
  const end = performance.now();

  const averageExecutionTime =
    executionPerIteration.reduce((a, b) => a + b, 0) / iterations;

  if (log) {
    console.log(
      `${fn.name} took ${
        end - start
      } milliseconds to complete ${iterations} iterations.`
    );
  }

  return {
    total: end - start,
    average: averageExecutionTime,
  };
}

/**
 * Measures the execution time of a function by running it multiple times.
 *
 * @param fn - The function to be benchmarked.
 * @param iterations - The number of times the function should be executed.
 * @param args - The arguments to be passed to the function.
 * @returns The total execution time in milliseconds.
 */
export function benchmarkIterations(
	fn: Function,
	iterations: number,
	...args: any[]
): number {
	const start = performance.now();
	for (let i = 0; i < iterations; i++) {
		fn(...args);
	}
	const end = performance.now();

	return end - start;
}

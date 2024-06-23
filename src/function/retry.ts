/**
 * Retries a given function a specified number of times if it fails.
 * @param fn - The function to be retried.
 * @param retries - The number of times to retry the function.
 * @returns A promise that resolves with the result of the function if it succeeds, or rejects with the last error if it fails after all retries.
 */
export function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
	return fn().catch((error) => {
		if (retries > 0) {
			return retry(fn, retries - 1);
		}
		throw error;
	});
}

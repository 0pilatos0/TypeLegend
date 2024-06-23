/**
 * Creates a debounced version of the provided function.
 * The debounced function delays invoking the original function until after a specified amount of time has passed since the last time it was invoked.
 *
 * @template T - The type of the original function.
 * @param {T} func - The original function to be debounced.
 * @param {number} waitFor - The amount of time to wait before invoking the original function.
 * @returns {(...args: Parameters<T>) => void} - The debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	waitFor: number,
): (...args: Parameters<T>) => void {
	let timeout: Timer | null = null;

	return (...args: Parameters<T>): void => {
		if (timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func(...args);
		}, waitFor);
	};
}

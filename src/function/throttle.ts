/**
 * Creates a throttled version of the given function.
 * The throttled function will only be invoked at most once within the specified time limit.
 *
 * @template T - The type of the original function.
 * @param {T} func - The original function to be throttled.
 * @param {number} limit - The time limit in milliseconds.
 * @returns {(...args: Parameters<T>) => void} - The throttled function.
 */
export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number,
): (...args: Parameters<T>) => void {
	let lastFunc: Timer | null = null;
	let lastRan: number | null = null;

	return (...args: Parameters<T>): void => {
		if (!lastRan) {
			func(...args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc as Timer);
			lastFunc = setTimeout(
				() => {
					if (Date.now() - (lastRan as number) >= limit) {
						func(...args);
						lastRan = Date.now();
					}
				},
				limit - (Date.now() - (lastRan as number)),
			);
		}
	};
}

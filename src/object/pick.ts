/**
 * Creates a new object with only the specified keys from the original object.
 *
 * @template T - The type of the original object.
 * @template K - The type of the keys to pick from the original object.
 * @param obj - The original object.
 * @param keys - An array of keys to pick from the original object.
 * @returns A new object with only the specified keys from the original object.
 */
export function pick<T extends object, K extends keyof T>(
	obj: T,
	keys: K[],
): Pick<T, K> {
	const result = {} as Pick<T, K>;
	for (const key of keys) {
		result[key] = obj[key];
	}
	return result;
}

/**
 * Maps the keys of an object using a provided function.
 *
 * @param obj - The object whose keys will be mapped.
 * @param fn - The function to apply to each key-value pair. It takes the key and value as arguments and returns the new key.
 * @returns A new object with the mapped keys.
 */
export function mapKeys<T extends { [s: string]: unknown }>(
	obj: T,
	fn: (key: string, value: any) => any,
): Record<string, any> {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [fn(key, value), value]),
	);
}

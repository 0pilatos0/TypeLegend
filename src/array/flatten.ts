/**
 * Flattens a multi-dimensional array into a 1-dimensional array.
 *
 * @param arr The multi-dimensional array to flatten.
 * @returns A new 1-dimensional array containing all the elements from the original array.
 * @template T The type of elements in the array.
 */
export function flatten<T>(arr: any[]): T[] {
	return arr.reduce(
		(acc, val) =>
			Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
		[],
	);
}

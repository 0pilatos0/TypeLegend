/**
 * Removes null and undefined values from an array.
 * @param array - The array to compact.
 * @returns A new array with all null and undefined values removed.
 * @template T - The type of elements in the array.
 */
export function compact<T>(array: (T | null | undefined)[]): T[] {
	return array.filter((item): item is T => Boolean(item));
}

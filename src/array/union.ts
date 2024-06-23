/**
 * Returns a new array that contains unique elements from both input arrays.
 *
 * @template T - The type of elements in the arrays.
 * @param arr1 - The first input array.
 * @param arr2 - The second input array.
 * @returns A new array that contains unique elements from both input arrays.
 */
export function union<T>(arr1: T[], arr2: T[]): T[] {
	return [...new Set([...arr1, ...arr2])];
}

/**
 * Zips two arrays together, creating an array of tuples where each tuple contains
 * corresponding elements from both input arrays.
 *
 * @template T - The type of elements in the arrays.
 * @param {T[]} arr1 - The first input array.
 * @param {T[]} arr2 - The second input array.
 * @returns {[T, T][]} - An array of tuples containing corresponding elements from both input arrays.
 */
export function zip<T>(arr1: T[], arr2: T[]): [T, T][] {
	const minLength = Math.min(arr1.length, arr2.length);
	return arr1.slice(0, minLength).map((value, index) => [value, arr2[index]]);
}

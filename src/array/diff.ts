/**
 * Returns an array containing the elements from `arr1` that are not present in `arr2`.
 *
 * @template T - The type of elements in the arrays.
 * @param {T[]} arr1 - The first array.
 * @param {T[]} arr2 - The second array.
 * @returns {T[]} - The difference between `arr1` and `arr2`.
 */
export function diff<T>(arr1: T[], arr2: T[]): T[] {
	return arr1.filter((value) => !arr2.includes(value));
}

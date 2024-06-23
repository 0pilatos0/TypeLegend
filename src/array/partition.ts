/**
 * Partitions an array into two separate arrays based on a given predicate function.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to be partitioned.
 * @param {(element: T, index: number, array: T[]) => boolean} predicate - The predicate function used to determine the partition.
 * @returns {[T[], T[]]} - An array containing two arrays: the first array contains elements that satisfy the predicate, and the second array contains elements that do not satisfy the predicate.
 */
export function partition<T>(
	arr: T[],
	predicate: (element: T, index: number, array: T[]) => boolean,
): [T[], T[]] {
	if (
		arr.length === 0 ||
		arr.every((element, index, array) => !predicate(element, index, array))
	) {
		return [[], []];
	}

	return arr.reduce(
		(acc, val, index) => {
			acc[predicate(val, index, arr) ? 0 : 1].push(val);
			return acc;
		},
		[[], []] as [T[], T[]],
	);
}

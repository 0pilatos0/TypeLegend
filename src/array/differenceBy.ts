/**
 * Returns an array of values from `arr` that are not present in `values`,
 * based on the result of applying `iteratee` function to each value.
 *
 * @template T The type of elements in the input array.
 * @template U The type of elements returned by the `iteratee` function.
 * @param {T[]} arr The input array to compare against.
 * @param {T[]} values The array of values to exclude from the result.
 * @param {(value: T) => U} iteratee The function to transform each value before comparison.
 * @returns {T[]} An array of values from `arr` that are not present in `values`.
 */
export function differenceBy<T, U>(
	arr: T[],
	values: T[],
	iteratee: (value: T) => U,
): T[] {
	const set = new Set(values.map(iteratee));
	return arr.filter((a) => !set.has(iteratee(a)));
}

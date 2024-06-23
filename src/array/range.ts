/**
 * Returns a new array containing a portion of the original array.
 * @template T The type of elements in the array.
 * @param {T[]} arr The original array.
 * @param {number} [start=0] The starting index (inclusive) of the portion to extract. Defaults to 0.
 * @param {number} [end=arr.length] The ending index (exclusive) of the portion to extract. Defaults to the length of the array.
 * @returns {T[]} A new array containing the extracted portion of the original array.
 */
export function range<T>(arr: T[], start = 0, end = arr.length): T[] {
	return arr.slice(start, end);
}

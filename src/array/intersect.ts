/**
 * Returns an array containing the elements that are present in both input arrays.
 *
 * @template T - The type of the elements in the arrays.
 * @param a - The first input array.
 * @param b - The second input array.
 * @returns An array containing the elements that are present in both input arrays.
 */
export function intersect<T>(a: T[], b: T[]): T[] {
	const setA = new Set(a);
	const setB = new Set(b);
	return Array.from(setA).filter((x) => setB.has(x));
}

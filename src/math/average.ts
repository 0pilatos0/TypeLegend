/**
 * Calculates the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average value.
 */
export function average(arr: number[]): number {
	return arr.reduce((a, b) => a + b, 0) / arr.length;
}

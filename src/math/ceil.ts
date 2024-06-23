/**
 * Returns the smallest integer greater than or equal to a given number, rounded to a specified precision.
 * @param number - The number to round up.
 * @param precision - The number of decimal places to round up to. Defaults to 0.
 * @returns The rounded up number.
 */
export function ceil(number: number, precision = 0): number {
	const factor = 10 ** precision;
	return Math.ceil(number * factor) / factor;
}

/**
 * Returns the largest integer less than or equal to a given number, with optional precision.
 *
 * @param number - The number to round down.
 * @param precision - The number of decimal places to preserve. Defaults to 0.
 * @returns The rounded down number.
 *
 * @example
 * ```
 * floor(4.9); // 4
 * floor(4.12345, 3); // 4.123
 * ```
 */
export function floor(number: number, precision = 0): number {
	const pair = `${number}`.split(".");
	const integer = pair[0];
	const decimal = pair[1] || "";
	const length = decimal.length;
	const index = precision > length ? length : precision;
	const result = `${integer}.${decimal.slice(0, index)}`;
	return Number(result);
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor of `a` and `b`.
 */
export function gdc(a: number, b: number): number {
	if (b === 0) {
		return a;
	}
	return gdc(b, a % b);
}

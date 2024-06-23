/**
 * Calculates the factorial of a given number.
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 * @throws {Error} If the given number is negative.
 */
export function factorial(n: number): number {
	if (n < 0) {
		throw new Error("The factorial of a negative number is undefined.");
	}
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

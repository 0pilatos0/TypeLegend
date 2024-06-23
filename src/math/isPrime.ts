/**
 * Checks if a number is prime.
 * @param a - The number to check.
 * @returns True if the number is prime, false otherwise.
 */
export function isPrime(a: number): boolean {
	if (a < 2) {
		return false;
	}
	for (let i = 2; i < a; i++) {
		if (a % i === 0) {
			return false;
		}
	}
	return true;
}

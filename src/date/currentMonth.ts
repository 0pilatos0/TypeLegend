/**
 * Returns the current month as a number.
 * @returns {number} The current month as a number (1-12).
 */
export function currentMonth(): number {
	return new Date().getMonth() + 1;
}

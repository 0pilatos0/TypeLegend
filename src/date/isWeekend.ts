/**
 * Checks if a given date falls on a weekend.
 * @param {Date} date - The date to check.
 * @returns {boolean} - Returns true if the date falls on a weekend, otherwise returns false.
 */
export function isWeekend(date: Date): boolean {
	return date.getDay() === 0 || date.getDay() === 6;
}

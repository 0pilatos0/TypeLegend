/**
 * Returns the name of the current month.
 * @returns {string} The name of the current month.
 */
export function currentMonthName(): string {
	return new Date().toLocaleString("default", { month: "long" });
}

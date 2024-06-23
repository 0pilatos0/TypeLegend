/**
 * Returns the name of the current day of the week.
 * @returns {string} The name of the current day of the week.
 */
export function currentDayName(): string {
	const today = new Date();
	const day = today.getDay();
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return days[day];
}

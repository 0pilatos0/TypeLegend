/**
 * Calculates the difference in days between two dates.
 * @param dateLeft The first date.
 * @param dateRight The second date.
 * @returns The difference in days between the two dates.
 */
export function differenceInDays(dateLeft: Date, dateRight: Date): number {
	return Math.round(
		(dateRight.getTime() - dateLeft.getTime()) / (1000 * 3600 * 24),
	);
}

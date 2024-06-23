/**
 * Calculates the difference in weeks between two dates.
 *
 * @param dateLeft - The first date.
 * @param dateRight - The second date.
 * @returns The difference in weeks between the two dates.
 */
export function differenceInWeeks(dateLeft: Date, dateRight: Date): number {
	return Math.round(
		(dateRight.getTime() - dateLeft.getTime()) / (1000 * 3600 * 24 * 7),
	);
}

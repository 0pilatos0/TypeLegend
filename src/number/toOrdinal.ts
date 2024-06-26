/**
 * Converts a number to its ordinal representation.
 *
 * @param num - The number to convert.
 * @returns The ordinal representation of the number.
 */
export function toOrdinal(num: number): string {
	const j = num % 10;
	const k = num % 100;
	if (j === 1 && k !== 11) {
		return `${num}st`;
	}
	if (j === 2 && k !== 12) {
		return `${num}nd`;
	}
	if (j === 3 && k !== 13) {
		return `${num}rd`;
	}
	return `${num}th`;
}

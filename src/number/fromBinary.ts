/**
 * Converts a binary string to a number.
 *
 * @param binaryString The binary string to convert.
 * @returns The converted number.
 */
export function fromBinary(binaryString: string): number {
	return Number.parseInt(binaryString, 2);
}

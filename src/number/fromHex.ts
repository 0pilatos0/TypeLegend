/**
 * Converts a hexadecimal string to a number.
 *
 * @param hexString - The hexadecimal string to convert.
 * @returns The converted number.
 */
export function fromHex(hexString: string): number {
	return Number.parseInt(hexString, 16);
}

/**
 * Converts a string representing an ordinal number to its corresponding numeric value.
 *
 * @param n - The string representing the ordinal number. (e.g. "1st", "2nd", "3rd", "4th", etc.)
 * @returns The numeric value of the ordinal number.
 */
export function fromOrdinal(n: string): number {
  return parseInt(n.replace(/\D/g, ""));
}

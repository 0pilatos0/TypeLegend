/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param str - The string to search within.
 * @param substr - The substring to count occurrences of.
 * @returns The number of occurrences of the substring within the string.
 */
export function countOccurrences(str: string, substr: string): number {
  return str.split(substr).length - 1;
}

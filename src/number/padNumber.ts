/**
 * Pads a number with leading zeros to a specified length.
 *
 * @param num - The number to pad.
 * @param length - The desired length of the padded number.
 * @returns The padded number as a string.
 */
export function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, "0");
}

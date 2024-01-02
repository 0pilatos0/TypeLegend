/**
 * Subtracts the specified number of days from a given date.
 *
 * @param date - The date to subtract days from.
 * @param days - The number of days to subtract.
 * @returns A new Date object representing the result of the subtraction.
 */
export function subtractDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

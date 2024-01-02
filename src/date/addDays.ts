/**
 * Adds the specified number of days to a given date.
 * @param date - The date to add days to.
 * @param days - The number of days to add.
 * @returns A new Date object representing the result of adding the specified number of days to the given date.
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

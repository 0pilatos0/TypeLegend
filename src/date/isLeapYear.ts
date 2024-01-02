/**
 * Checks if a given year is a leap year.
 * @param date - The date object representing the year.
 * @returns A boolean value indicating whether the year is a leap year.
 */
export function isLeapYear(date: Date): boolean {
  const year = date.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

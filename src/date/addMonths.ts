/**
 * Adds the specified number of months to a given date.
 *
 * @param {Date} date - The date to which the months should be added.
 * @param {number} months - The number of months to add.
 * @returns {Date} - The new date after adding the specified number of months.
 */
export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + months);
  return newDate;
}

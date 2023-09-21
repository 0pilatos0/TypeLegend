/**
 * Returns the current day of the month.
 * @returns {number} The current day of the month.
 */
function currentDay(): number {
  return new Date().getDate();
}

export { currentDay };

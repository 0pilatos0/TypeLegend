/**
 * Returns the current year as a number.
 * @returns {number} The current year.
 */
function currentYear(): number {
  return new Date().getFullYear();
}

export { currentYear };

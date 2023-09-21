/**
 * Returns the name of the current month.
 * @returns {string} The name of the current month.
 */
function currentMonthName(): string {
  return new Date().toLocaleString("default", { month: "long" });
}

export { currentMonthName };

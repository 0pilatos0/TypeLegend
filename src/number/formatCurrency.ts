/**
 * Formats a number as currency.
 *
 * @param num - The number to format.
 * @param currency - The currency symbol to use (default: "$").
 * @returns The formatted currency string.
 */
export function formatCurrency(num: number, currency = "$"): string {
	return `${currency}${num.toFixed(2)}`;
}

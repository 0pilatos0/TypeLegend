/**
 * Converts a number to its Roman numeral representation.
 * @param input - The number to be converted to Roman numeral.
 * @returns A string representing the Roman numeral.
 */
export function toRoman(input: number): string {
	let num = input;
	if (num < 1 || num > 3999) {
		throw new Error("Number out of range (1-3999)");
	}

	const numerals: [number, string][] = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	];

	let roman = "";
	for (const [value, symbol] of numerals) {
		while (num >= value) {
			roman += symbol;
			num -= value;
		}
	}

	return roman;
}

/**
 * Converts a Roman numeral string to a number.
 *
 * @param input - The Roman numeral string to convert.
 * @returns The converted number.
 */
export function fromRoman(input: string): number {
	let str = input;
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

	let num = 0;
	for (const [value, symbol] of numerals) {
		while (str.startsWith(symbol)) {
			num += value;
			str = str.slice(symbol.length);
		}
	}

	return num;
}

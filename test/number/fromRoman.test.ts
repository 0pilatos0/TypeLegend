import { describe, expect, it } from "bun:test";
import { fromRoman } from "../../src/number/fromRoman";

describe("fromRoman", () => {
	it("should convert 'I' to 1", () => {
		const input = "I";
		const expectedOutput = 1;
		const result = fromRoman(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should convert 'IV' to 4", () => {
		const input = "IV";
		const expectedOutput = 4;
		const result = fromRoman(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should convert 'IX' to 9", () => {
		const input = "IX";
		const expectedOutput = 9;
		const result = fromRoman(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should convert 'XLIX' to 49", () => {
		const input = "XLIX";
		const expectedOutput = 49;
		const result = fromRoman(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should convert 'MMMCMXCIX' to 3999", () => {
		const input = "MMMCMXCIX";
		const expectedOutput = 3999;
		const result = fromRoman(input);
		expect(result).toEqual(expectedOutput);
	});
});

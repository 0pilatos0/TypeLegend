import { describe, expect, it } from "bun:test";
import { fromOrdinal } from "../../src/number/fromOrdinal";

describe("fromOrdinal", () => {
	it("should return the correct number from the ordinal string", () => {
		const input = "1st";
		const result = fromOrdinal(input);
		expect(result).toBe(1);
	});

	it("should return the correct number from the ordinal string with leading zeros", () => {
		const input = "02nd";
		const result = fromOrdinal(input);
		expect(result).toBe(2);
	});

	it("should return NaN for invalid ordinal strings", () => {
		const input = "invalid";
		const result = fromOrdinal(input);
		expect(Number.isNaN(result)).toBe(true);
	});
});

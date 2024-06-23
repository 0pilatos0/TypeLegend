import { describe, expect, it } from "bun:test";
import { gdc } from "../../src/math/gdc";

describe("gdc", () => {
	it("should return the greatest common divisor when b is not zero", () => {
		expect(gdc(12, 8)).toBe(4);
		expect(gdc(18, 12)).toBe(6);
		expect(gdc(21, 14)).toBe(7);
	});

	it("should return a when b is zero", () => {
		expect(gdc(12, 0)).toBe(12);
		expect(gdc(18, 0)).toBe(18);
		expect(gdc(21, 0)).toBe(21);
	});
});

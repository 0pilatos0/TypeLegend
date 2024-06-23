import { describe, expect, it } from "bun:test";
import { floor } from "../../src/math/floor";

describe("floor", () => {
	it("should return the floor of a positive number", () => {
		expect(floor(3.7)).toBe(3);
		expect(floor(3.2)).toBe(3);
		expect(floor(3.0)).toBe(3);
	});

	it("should return the floor of a number with precision", () => {
		// biome-ignore lint/suspicious/noApproximativeNumericConstant: we should check for the exact amount of decimal places
		expect(floor(Math.PI, 3)).toBe(3.141);
		expect(floor(Math.PI, 2)).toBe(3.14);
		expect(floor(Math.PI, 1)).toBe(3.1);
	});

	it("should return the same number if precision is greater than decimal length", () => {
		expect(floor(3.14, 3)).toBe(3.14);
		expect(floor(3.14, 4)).toBe(3.14);
		expect(floor(3.0, 2)).toBe(3.0);
	});
});

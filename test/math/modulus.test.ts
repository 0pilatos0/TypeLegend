import { describe, expect, it } from "bun:test";
import { modulus } from "../../src/math/modulus";

describe("modulus", () => {
	it("should return the correct modulus when a is positive and b is positive", () => {
		const result = modulus(10, 3);
		expect(result).toBe(1);
	});

	it("should return the correct modulus when a is negative and b is positive", () => {
		const result = modulus(-10, 3);
		expect(result).toBe(-1);
	});

	it("should return the correct modulus when a is positive and b is negative", () => {
		const result = modulus(10, -3);
		expect(result).toBe(1);
	});

	it("should return the correct modulus when a is negative and b is negative", () => {
		const result = modulus(-10, -3);
		expect(result).toBe(-1);
	});

	it("should return 0 when a is 0", () => {
		const result = modulus(0, 5);
		expect(result).toBe(0);
	});

	it("should return NaN when b is 0", () => {
		const result = modulus(10, 0);
		expect(result).toBeNaN();
	});
});

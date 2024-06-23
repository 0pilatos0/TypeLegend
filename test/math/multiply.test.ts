import { describe, expect, it } from "bun:test";
import { multiply } from "../../src/math/multiply";

describe("multiply", () => {
	it("should multiply two positive numbers correctly", () => {
		const result = multiply(2, 3);
		expect(result).toBe(6);
	});

	it("should multiply a positive and a negative number correctly", () => {
		const result = multiply(-4, 5);
		expect(result).toBe(-20);
	});

	it("should multiply two negative numbers correctly", () => {
		const result = multiply(-2, -3);
		expect(result).toBe(6);
	});

	it("should multiply a number by zero correctly", () => {
		const result = multiply(10, 0);
		expect(result).toBe(0);
	});
});

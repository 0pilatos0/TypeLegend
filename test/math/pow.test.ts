import { describe, expect, it } from "bun:test";
import { pow } from "../../src/math/pow";

describe("pow", () => {
	it("should return the correct result when raising a number to a positive power", () => {
		expect(pow(2, 3)).toBe(8);
		expect(pow(5, 2)).toBe(25);
		expect(pow(10, 0)).toBe(1);
	});

	it("should return 1 when raising any number to the power of 0", () => {
		expect(pow(3, 0)).toBe(1);
		expect(pow(7, 0)).toBe(1);
		expect(pow(100, 0)).toBe(1);
	});

	it("should return the correct result when raising a number to a negative power", () => {
		expect(pow(2, -2)).toBe(0.25);
		expect(pow(10, -3)).toBe(0.001);
		expect(pow(8, -1)).toBe(0.125);
	});
});

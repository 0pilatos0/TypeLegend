import { describe, expect, it } from "bun:test";
import { lcm } from "../../src/math/lcm";

describe("lcm", () => {
	it("should return the least common multiple of two numbers", () => {
		expect(lcm(12, 8)).toBe(24);
		expect(lcm(18, 12)).toBe(36);
		expect(lcm(21, 14)).toBe(42);
	});

	it("should return 0 when either of the numbers is 0", () => {
		expect(lcm(12, 0)).toBe(0);
		expect(lcm(0, 18)).toBe(0);
		expect(lcm(0, 0)).toBe(0);
	});

	it("should return the same number when both numbers are the same", () => {
		expect(lcm(12, 12)).toBe(12);
		expect(lcm(18, 18)).toBe(18);
		expect(lcm(21, 21)).toBe(21);
	});

	it("should return the product of the two numbers when one number is a multiple of the other", () => {
		expect(lcm(3, 9)).toBe(9);
		expect(lcm(5, 25)).toBe(25);
		expect(lcm(7, 14)).toBe(14);
	});

	it("should return a positive number when both numbers are negative", () => {
		expect(lcm(-12, -8)).toBe(24);
		expect(lcm(-18, -12)).toBe(36);
		expect(lcm(-21, -14)).toBe(42);
	});

	it("should return a positive number when one number is negative and the other is positive", () => {
		expect(lcm(-12, 8)).toBe(24);
		expect(lcm(18, -12)).toBe(36);
		expect(lcm(-21, 14)).toBe(42);
	});
});

import { describe, expect, it } from "bun:test";
import { isLeapYear } from "../../src/date/isLeapYear";

describe("isLeapYear", () => {
	it("should return true for a leap year", () => {
		const leapYear = new Date(2020, 1, 1); // February 1, 2020
		expect(isLeapYear(leapYear)).toBe(true);
	});

	it("should return false for a non-leap year", () => {
		const nonLeapYear = new Date(2021, 1, 1); // February 1, 2021
		expect(isLeapYear(nonLeapYear)).toBe(false);
	});
});

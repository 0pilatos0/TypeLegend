import { describe, expect, it } from "bun:test";
import { getWeekNumber } from "../../src/date/getWeekNumber";

describe("getWeekNumber", () => {
	it("should return the correct week number for a given date", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		expect(getWeekNumber(date)).toBe(1);
	});

	it("should return the correct week number for another date", () => {
		const date = new Date(2022, 11, 31); // December 31, 2022
		expect(getWeekNumber(date)).toBe(53);
	});

	it("should return the correct week number for a leap year", () => {
		const date = new Date(2020, 1, 29); // February 29, 2020
		expect(getWeekNumber(date)).toBe(9);
	});
});

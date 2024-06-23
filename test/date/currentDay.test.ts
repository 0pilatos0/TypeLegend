import { describe, expect, it } from "bun:test";
import { currentDay } from "../../src/date/currentDay";

describe("currentDay", () => {
	it("should return a number", () => {
		const result = currentDay();
		expect(typeof result).toBe("number");
	});

	it("should return the current day of the month", () => {
		const today = new Date();
		const expected = today.getDate();
		const result = currentDay();
		expect(result).toBe(expected);
	});
});

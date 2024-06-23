import { describe, expect, it } from "bun:test";
import { subtractDays } from "../../src/date/subtractDays";

describe("subtractDays", () => {
	it("should subtract the specified number of days from the date", () => {
		const date = new Date(2022, 0, 6); // January 6, 2022
		const result = subtractDays(date, 3);
		const expected = new Date(2022, 0, 3); // January 3, 2022
		expect(result).toEqual(expected);
	});

	it("should add the specified number of days to the date if negative value is provided", () => {
		const date = new Date(2022, 0, 3); // January 3, 2022
		const result = subtractDays(date, -5);
		const expected = new Date(2022, 0, 8); // January 8, 2022
		expect(result).toEqual(expected);
	});

	it("should not modify the original date object", () => {
		const date = new Date(2022, 0, 6); // January 6, 2022
		const result = subtractDays(date, 3);
		expect(result).not.toBe(date);
	});
});

import { describe, expect, it } from "bun:test";
import { addDays } from "../../src/date/addDays";

describe("addDays", () => {
	it("should add the specified number of days to the date", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		const result = addDays(date, 5);
		const expected = new Date(2022, 0, 6); // January 6, 2022
		expect(result).toEqual(expected);
	});

	it("should subtract the specified number of days from the date if negative value is provided", () => {
		const date = new Date(2022, 0, 6); // January 6, 2022
		const result = addDays(date, -3);
		const expected = new Date(2022, 0, 3); // January 3, 2022
		expect(result).toEqual(expected);
	});

	it("should not modify the original date object", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		const result = addDays(date, 5);
		expect(result).not.toBe(date);
	});
});

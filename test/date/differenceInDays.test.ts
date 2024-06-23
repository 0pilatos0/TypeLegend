import { describe, expect, it } from "bun:test";
import { differenceInDays } from "../../src/date/differenceInDays";

describe("differenceInDays", () => {
	it("should return the difference in days between two dates", () => {
		const dateLeft = new Date(2022, 0, 1); // January 1, 2022
		const dateRight = new Date(2022, 0, 6); // January 6, 2022
		const result = differenceInDays(dateLeft, dateRight);
		const expected = 5;
		expect(result).toEqual(expected);
	});

	it("should return a negative value if dateRight is greater than dateLeft", () => {
		const dateLeft = new Date(2022, 0, 6); // January 6, 2022
		const dateRight = new Date(2022, 0, 1); // January 1, 2022
		const result = differenceInDays(dateLeft, dateRight);
		const expected = -5;
		expect(result).toEqual(expected);
	});

	it("should return 0 if both dates are the same", () => {
		const dateLeft = new Date(2022, 0, 1); // January 1, 2022
		const dateRight = new Date(2022, 0, 1); // January 1, 2022
		const result = differenceInDays(dateLeft, dateRight);
		const expected = 0;
		expect(result).toEqual(expected);
	});
});

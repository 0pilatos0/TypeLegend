import { describe, expect, it } from "bun:test";
import { differenceInWeeks } from "../../src/date/differenceInWeeks";

describe("differenceInWeeks", () => {
	it("should return the correct number of weeks when dateRight is greater than dateLeft", () => {
		const dateLeft = new Date("2022-01-01");
		const dateRight = new Date("2022-02-01");
		expect(differenceInWeeks(dateLeft, dateRight)).toEqual(4);
	});

	it("should return the correct number of weeks when dateRight is less than dateLeft", () => {
		const dateLeft = new Date("2022-02-01");
		const dateRight = new Date("2022-01-01");
		expect(differenceInWeeks(dateLeft, dateRight)).toEqual(-4);
	});

	it("should return 0 when dateRight is equal to dateLeft", () => {
		const dateLeft = new Date("2022-01-01");
		const dateRight = new Date("2022-01-01");
		expect(differenceInWeeks(dateLeft, dateRight)).toEqual(0);
	});
});

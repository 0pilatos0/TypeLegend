import { describe, expect, it } from "bun:test";
import { currentMonthName } from "../../src/date/currentMonthName";

describe("currentMonthName", () => {
	it("should return the name of the current month", () => {
		const expectedMonthName = new Date().toLocaleString("default", {
			month: "long",
		});
		expect(currentMonthName()).toEqual(expectedMonthName);
	});
});

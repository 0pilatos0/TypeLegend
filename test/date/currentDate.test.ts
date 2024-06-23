import { describe, expect, it } from "bun:test";
import { currentDate } from "../../src/date/currentDate";

describe("currentDate", () => {
	it("should return the current date and time", () => {
		const now = new Date();
		const result = currentDate();
		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBeCloseTo(now.getTime(), -2);
	});
});

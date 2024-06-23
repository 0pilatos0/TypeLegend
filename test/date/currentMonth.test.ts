import { describe, expect, it } from "bun:test";
import { currentMonth } from "../../src/date/currentMonth";

describe("currentMonth", () => {
	it("should return a number between 1 and 12", () => {
		const month = currentMonth();
		expect(month).toBeGreaterThanOrEqual(1);
		expect(month).toBeLessThanOrEqual(12);
	});
});

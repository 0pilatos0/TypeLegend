import { describe, expect, it } from "bun:test";
import { currentYear } from "../../src/date/currentYear";

describe("currentYear", () => {
	it("should return the current year as a number", () => {
		const currentYearNumber = currentYear();
		expect(typeof currentYearNumber).toBe("number");
		expect(currentYearNumber).toBe(new Date().getFullYear());
	});
});

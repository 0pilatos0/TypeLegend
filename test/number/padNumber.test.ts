import { describe, expect, it } from "bun:test";
import { padNumber } from "../../src/number/padNumber";

describe("padNumber", () => {
	it("should pad a number with leading zeros", () => {
		const num = 42;
		const length = 6;
		expect(padNumber(num, length)).toBe("000042");
	});

	it("should not pad a number if length is less than or equal to the number length", () => {
		const num = 42;
		const length = 2;
		expect(padNumber(num, length)).toBe("42");
	});
});

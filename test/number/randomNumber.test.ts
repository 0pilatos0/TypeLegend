import { describe, expect, it } from "bun:test";
import { randomNumber } from "../../src/number/randomNumber";

describe("randomNumber", () => {
	it("should return a random number within the specified range", () => {
		const min = 1;
		const max = 10;
		const result = randomNumber(min, max);
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	});

	it("should return the minimum value when min and max are the same", () => {
		const min = 5;
		const max = 5;
		const result = randomNumber(min, max);
		expect(result).toEqual(min);
	});

	it("should return an integer value", () => {
		const min = 1;
		const max = 10;
		const result = randomNumber(min, max);
		expect(Number.isInteger(result)).toBe(true);
	});

	it("should throw an error when min is greater than max", () => {
		const min = 10;
		const max = 5;
		expect(() => randomNumber(min, max)).toThrow(
			"Invalid range: min must be less than or equal to max",
		);
	});
});

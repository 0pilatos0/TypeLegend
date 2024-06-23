import { describe, expect, it } from "bun:test";
import { randomInt } from "../../src/math/randomInt";

describe("randomInt", () => {
	it("should return a random integer within the specified range", () => {
		const min = 1;
		const max = 10;
		const result = randomInt(min, max);
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
		expect(Number.isInteger(result)).toBe(true);
	});

	it("should return the minimum value when min and max are the same", () => {
		const min = 5;
		const max = 5;
		const result = randomInt(min, max);
		expect(result).toBe(min);
	});

	it("should return the minimum value when min is greater than max", () => {
		const min = 10;
		const max = 5;
		const result = randomInt(min, max);
		expect(result).toBe(min);
	});
});

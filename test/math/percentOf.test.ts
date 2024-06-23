import { describe, expect, it } from "bun:test";
import { percentOf } from "../../src/math/percentOf";

describe("percentOf", () => {
	it("should calculate the correct percentage when a is smaller than b", () => {
		const a = 5;
		const b = 10;
		const result = percentOf(a, b);
		expect(result).toBe(50);
	});

	it("should calculate the correct percentage when a is larger than b", () => {
		const a = 10;
		const b = 5;
		const result = percentOf(a, b);
		expect(result).toBe(200);
	});

	it("should return 0 when a is 0", () => {
		const a = 0;
		const b = 10;
		const result = percentOf(a, b);
		expect(result).toBe(0);
	});

	it("should return Infinity when b is 0", () => {
		const a = 10;
		const b = 0;
		const result = percentOf(a, b);
		expect(result).toBe(Number.POSITIVE_INFINITY);
	});
});

import { describe, expect, it } from "bun:test";
import { average } from "../../src/math/average";

describe("average", () => {
	it("should return the average of an array of numbers", () => {
		const arr = [1, 2, 3, 4, 5];
		expect(average(arr)).toBe(3);
	});

	it("should return NaN when the array is empty", () => {
		const arr: number[] = [];
		expect(average(arr)).toBeNaN();
	});

	it("should return the number itself when the array contains a single element", () => {
		const arr = [42];
		expect(average(arr)).toBe(42);
	});

	it("should return the average of negative numbers", () => {
		const arr = [-1, -2, -3, -4, -5];
		expect(average(arr)).toBe(-3);
	});

	it("should return the average of decimal numbers", () => {
		const arr = [1.5, 2.5, 3.5, 4.5, 5.5];
		expect(average(arr)).toBe(3.5);
	});
});

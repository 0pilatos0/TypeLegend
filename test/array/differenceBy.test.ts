import { describe, expect, it } from "bun:test";
import { differenceBy } from "../../src/array/differenceBy";

describe("differenceBy", () => {
	it("should return an array of values from `arr` that are not present in `values` based on the result of applying `iteratee` function", () => {
		const arr = [1, 2, 3, 4, 5];
		const values = [2, 4, 6];
		const iteratee = (value: number) => value % 2;
		const expected = [1, 3, 5];
		expect(differenceBy(arr, values, iteratee)).toEqual(expected);
	});

	it("should return an empty array if `arr` is empty", () => {
		const arr: number[] = [];
		const values = [2, 4, 6];
		const iteratee = (value: number) => value % 2;
		const expected: number[] = [];
		expect(differenceBy(arr, values, iteratee)).toEqual(expected);
	});

	it("should return `arr` if `values` is empty", () => {
		const arr = [1, 2, 3, 4, 5];
		const values: number[] = [];
		const iteratee = (value: number) => value % 2;
		const expected = [1, 2, 3, 4, 5];
		expect(differenceBy(arr, values, iteratee)).toEqual(expected);
	});

	it("should return an empty array if `arr` and `values` are empty", () => {
		const arr: number[] = [];
		const values: number[] = [];
		const iteratee = (value: number) => value % 2;
		const expected: number[] = [];
		expect(differenceBy(arr, values, iteratee)).toEqual(expected);
	});
});

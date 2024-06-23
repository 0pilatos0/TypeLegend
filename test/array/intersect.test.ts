import { describe, expect, it } from "bun:test";
import { intersect } from "../../src/array/intersect";

describe("intersect", () => {
	it("should return an array of common elements between two arrays", () => {
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [4, 5, 6, 7, 8];
		const result = intersect(arr1, arr2);
		expect(result).toEqual([4, 5]);
	});

	it("should return an empty array if there are no common elements", () => {
		const arr1 = [1, 2, 3];
		const arr2 = [4, 5, 6];
		const result = intersect(arr1, arr2);
		expect(result).toEqual([]);
	});

	it("should handle arrays with duplicate elements", () => {
		const arr1 = [1, 2, 2, 3, 4];
		const arr2 = [2, 3, 3, 4, 5];
		const result = intersect(arr1, arr2);
		expect(result).toEqual([2, 3, 4]);
	});

	it("should handle empty arrays", () => {
		const arr1: number[] = [];
		const arr2: number[] = [];
		const result = intersect(arr1, arr2);
		expect(result).toEqual([]);
	});
});

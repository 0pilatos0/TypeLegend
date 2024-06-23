import { describe, expect, it } from "bun:test";
import { partition } from "../../src/array/partition";

describe("partition", () => {
	it("should partition the array based on the given predicate", () => {
		const array = [1, 2, 3, 4, 5];
		const [even, odd] = partition(array, (element) => element % 2 === 0);
		expect(even).toEqual([2, 4]);
		expect(odd).toEqual([1, 3, 5]);
	});

	it("should partition the array into two empty arrays if the predicate always returns false", () => {
		const array = [1, 2, 3, 4, 5];
		const [even, odd] = partition(array, () => false);
		expect(even).toEqual([]);
		expect(odd).toEqual([]);
	});

	it("should partition the array into two arrays with the same elements if the predicate always returns true", () => {
		const array = [1, 2, 3, 4, 5];
		const [even, odd] = partition(array, () => true);
		expect(even).toEqual([1, 2, 3, 4, 5]);
		expect(odd).toEqual([]);
	});

	it("should partition an empty array into two empty arrays", () => {
		const array: number[] = [];
		const [even, odd] = partition(array, (element) => element % 2 === 0);
		expect(even).toEqual([]);
		expect(odd).toEqual([]);
	});
});

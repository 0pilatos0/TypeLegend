import { describe, expect, it } from "bun:test";
import { flatten } from "../../src/array/flatten";

describe("flatten", () => {
	it("should flatten a nested array", () => {
		const input = [
			[1, 2],
			[3, 4],
			[5, 6],
		];
		const expectedOutput = [1, 2, 3, 4, 5, 6];
		expect(flatten(input)).toEqual(expectedOutput);
	});

	it("should handle an empty array", () => {
		const input: number[][] = [];
		const expectedOutput: number[] = [];
		expect(flatten(input)).toEqual(expectedOutput);
	});

	it("should handle an array with a single element", () => {
		const input = [[42]];
		const expectedOutput = [42];
		expect(flatten(input)).toEqual(expectedOutput);
	});

	it("should handle an array with multiple levels of nesting", () => {
		const input = [
			[1, [2, 3]],
			[4, [5, [6]]],
		];
		const expectedOutput = [1, 2, 3, 4, 5, 6];
		expect(flatten(input)).toEqual(expectedOutput);
	});
});

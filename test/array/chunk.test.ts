import { describe, expect, it } from "bun:test";
import { chunk } from "../../src/array/chunk";

describe("chunk", () => {
	it("should split an array into chunks of specified size", () => {
		const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const expectedOutput = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
		expect(chunk(input, 2)).toEqual(expectedOutput);
	});

	it("should handle empty arrays", () => {
		const input: number[] = [];
		const expectedOutput: number[][] = [];
		expect(chunk(input, 3)).toEqual(expectedOutput);
	});

	it("should handle arrays with a single element", () => {
		const input = [42];
		const expectedOutput = [[42]];
		expect(chunk(input, 2)).toEqual(expectedOutput);
	});

	it("should handle arrays with size greater than the array length", () => {
		const input = [1, 2, 3];
		const expectedOutput = [[1, 2, 3]];
		expect(chunk(input, 5)).toEqual(expectedOutput);
	});

	it("should handle arrays with size equal to the array length", () => {
		const input = [1, 2, 3];
		const expectedOutput = [[1, 2, 3]];
		expect(chunk(input, 3)).toEqual(expectedOutput);
	});

	it("should handle arrays with size less than or equal to 0", () => {
		const input = [1, 2, 3];
		const expectedOutput = [[1], [2], [3]];
		expect(chunk(input, 0)).toEqual(expectedOutput);
		expect(chunk(input, -1)).toEqual(expectedOutput);
	});
});

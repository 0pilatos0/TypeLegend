import { describe, expect, it } from "bun:test";
import { keys } from "../../src/object/keys";

describe("keys", () => {
	it("should return an array of keys from the object", () => {
		const input = { a: 1, b: 2, c: 3 };
		const expectedOutput = ["a", "b", "c"];
		expect(keys(input)).toEqual(expectedOutput);
	});

	it("should return an empty array for an empty object", () => {
		const input = {};
		const expectedOutput: string[] = [];
		expect(keys(input)).toEqual(expectedOutput);
	});

	it("should return an array of keys for an object with nested properties", () => {
		const input = { a: 1, b: { c: 2, d: 3 }, e: 4 };
		const expectedOutput = ["a", "b", "e"];
		expect(keys(input)).toEqual(expectedOutput);
	});

	it("should return an array of keys for an object with symbols as keys", () => {
		const symbol1 = Symbol("symbol1");
		const symbol2 = Symbol("symbol2");
		const input = { [symbol1]: 1, [symbol2]: 2 };
		const expectedOutput = [symbol1, symbol2];
		expect(keys(input)).toEqual(expectedOutput);
	});
});

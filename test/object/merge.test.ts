import { describe, expect, it } from "bun:test";
import { merge } from "../../src/object/merge";

describe("merge", () => {
	it("should merge two objects and return the merged object", () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { c: 3, d: 4 };
		const expectedOutput = { a: 1, b: 2, c: 3, d: 4 };
		expect(merge(obj1, obj2)).toEqual(expectedOutput);
	});

	it("should handle empty objects", () => {
		const obj1 = {};
		const obj2 = {};
		const expectedOutput = {};
		expect(merge(obj1, obj2)).toEqual(expectedOutput);
	});

	it("should handle objects with overlapping keys", () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { b: 3, c: 4 };
		const expectedOutput = { a: 1, b: 3, c: 4 };
		expect(merge(obj1, obj2)).toEqual(expectedOutput);
	});

	it("should handle objects with nested properties", () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { c: { d: 2 } };
		const expectedOutput = { a: { b: 1 }, c: { d: 2 } };
		expect(merge(obj1, obj2)).toEqual(expectedOutput);
	});
});

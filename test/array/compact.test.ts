import { describe, expect, it } from "bun:test";
import { compact } from "../../src/array/compact";

describe("compact", () => {
	it("should remove null and undefined values from the array", () => {
		const array = [1, null, 2, undefined, 3];
		expect(compact(array)).toEqual([1, 2, 3]);
	});

	it("should keep non-null and non-undefined values in the array", () => {
		const array = [null, "hello", undefined, 42, "world"];
		expect(compact(array)).toEqual(["hello", 42, "world"]);
	});

	it("should return an empty array if all values are null or undefined", () => {
		const array = [null, undefined, null, undefined];
		expect(compact(array)).toEqual([]);
	});

	it("should return the same array if there are no null or undefined values", () => {
		const array = [1, 2, 3, 4, 5];
		expect(compact(array)).toEqual([1, 2, 3, 4, 5]);
	});
});

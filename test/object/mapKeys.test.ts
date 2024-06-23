import { describe, expect, it } from "bun:test";
import { mapKeys } from "../../src/object/mapKeys";

describe("mapKeys", () => {
	it("should map keys of an object using the provided function", () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = mapKeys(obj, (key) => key.toUpperCase());
		expect(result).toEqual({ A: 1, B: 2, C: 3 });
	});

	it("should preserve the values of the object", () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = mapKeys(obj, (key) => key);
		expect(result).toEqual({ a: 1, b: 2, c: 3 });
	});

	it("should handle an empty object", () => {
		const obj = {};
		const result = mapKeys(obj, (key) => key.toUpperCase());
		expect(result).toEqual({});
	});

	it("should handle an object with a single key-value pair", () => {
		const obj = { a: 1 };
		const result = mapKeys(obj, (key) => key.toUpperCase());
		expect(result).toEqual({ A: 1 });
	});

	it("should map keys of an object using the provided function", () => {
		const obj = { a: 1, b: 2, c: 3 };
		function addPrefix(key: string, value: any) {
			return `prefix_${key}`;
		}
		const result = mapKeys(obj, addPrefix);
		expect(result).toEqual({ prefix_a: 1, prefix_b: 2, prefix_c: 3 });
	});
});

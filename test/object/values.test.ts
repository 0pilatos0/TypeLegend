import { describe, expect, it } from "bun:test";
import { values } from "../../src/object/values";

describe("values", () => {
	it("should return an array of values from the object", () => {
		const input = { name: "John", age: 30, hobbies: ["reading", "coding"] };
		const expectedOutput = ["John", 30, ["reading", "coding"]];
		const result = values(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an empty array for an empty object", () => {
		const input = {};
		const expectedOutput: any[] = [];
		const result = values(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an array of values from an object with nested objects", () => {
		const input = {
			name: "John",
			address: {
				street: "123 Main St",
				city: "New York",
				country: "USA",
			},
		};
		const expectedOutput = [
			"John",
			{ street: "123 Main St", city: "New York", country: "USA" },
		];
		const result = values(input);
		expect(result).toEqual(expectedOutput);
	});
});

import { describe, expect, it } from "bun:test";
import { pick } from "../../src/object/pick";

describe("pick", () => {
	it("should return an object with the specified keys", () => {
		const input = { name: "John", age: 30, hobbies: ["reading", "coding"] };
		const keys: ("name" | "age" | "hobbies")[] = ["name", "age"];
		const expectedOutput = { name: "John", age: 30 };
		const result = pick(input, keys);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an empty object for an empty input object", () => {
		const input = {};
		const keys: ("name" | "age" | "hobbies")[] = ["name", "age"];
		const expectedOutput = {};
		const result = pick(input, keys as never[]);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an object with nested properties", () => {
		const input = {
			name: "John",
			address: {
				street: "123 Main St",
				city: "New York",
				country: "USA",
			},
		};
		const keys: ("name" | "address")[] = ["name", "address"];
		const expectedOutput = {
			name: "John",
			address: {
				street: "123 Main St",
				city: "New York",
				country: "USA",
			},
		};
		const result = pick(input, keys);
		expect(result).toEqual(expectedOutput);
	});
});

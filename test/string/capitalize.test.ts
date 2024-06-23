import { describe, expect, it } from "bun:test";
import { capitalize } from "../../src";

describe("capitalize", () => {
	it("should capitalize the first letter of a string", () => {
		expect(capitalize("hello")).toBe("Hello");
		expect(capitalize("world")).toBe("World");
		expect(capitalize("TypeScript")).toBe("Typescript");
	});

	it("should make the rest of the string lowercase", () => {
		expect(capitalize("HELLO")).toBe("Hello");
		expect(capitalize("WORLD")).toBe("World");
		expect(capitalize("tYPEsCRIPT")).toBe("Typescript");
	});

	it("should return an empty string if given an empty string", () => {
		expect(capitalize("")).toBe("");
	});
});

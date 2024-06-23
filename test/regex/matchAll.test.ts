import { describe, expect, it } from "bun:test";
import { matchAll } from "../../src/regex/matchAll";

describe("matchAll", () => {
	it("should return an array of matches when there are multiple matches", () => {
		const str = "Hello, world! This is a test.";
		const regex = /[a-z]+/g;
		const expectedOutput = ["ello", "world", "his", "is", "a", "test"];
		const result = matchAll(str, regex);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an empty array when there are no matches", () => {
		const str = "Hello, world! This is a test.";
		const regex = /[0-9]+/g;
		const expectedOutput: string[] = [];
		const result = matchAll(str, regex);
		expect(result).toEqual(expectedOutput);
	});

	it("should return an array with a single match when there is only one match", () => {
		const str = "Hello, world! This is a test.";
		const regex = /world/g;
		const expectedOutput = ["world"];
		const result = matchAll(str, regex);
		expect(result).toEqual(expectedOutput);
	});
});

import { describe, expect, it } from "bun:test";
import { countOccurrences } from "../../src/string/countOccurrences";

describe("countOccurrences", () => {
	it("should return the correct number of occurrences when substring is present multiple times", () => {
		const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
		const substr = "ipsum";
		expect(countOccurrences(str, substr)).toBe(1);
	});

	it("should return 0 when substring is not present in the string", () => {
		const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
		const substr = "foo";
		expect(countOccurrences(str, substr)).toBe(0);
	});

	it("should return the correct number of occurrences when substring is present at the beginning of the string", () => {
		const str = "ipsum dolor sit amet, consectetur adipiscing elit";
		const substr = "ipsum";
		expect(countOccurrences(str, substr)).toBe(1);
	});

	it("should return the correct number of occurrences when substring is present at the end of the string", () => {
		const str = "Lorem ipsum dolor sit amet, consectetur adipiscing ipsum";
		const substr = "ipsum";
		expect(countOccurrences(str, substr)).toBe(2);
	});

	it("should return the correct number of occurrences when substring is an empty string", () => {
		const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
		const substr = "";
		expect(countOccurrences(str, substr)).toBe(str.length - 1);
	});
});

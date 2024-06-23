import { describe, expect, it } from "bun:test";
import { reverse } from "../../src/string/reverse";

describe("reverse", () => {
	it("should reverse a string", () => {
		const str = "hello";
		expect(reverse(str)).toBe("olleh");
	});

	it("should reverse an empty string", () => {
		const str = "";
		expect(reverse(str)).toBe("");
	});

	it("should reverse a string with special characters", () => {
		const str = "!@#$%^&*";
		expect(reverse(str)).toBe("*&^%$#@!");
	});
});

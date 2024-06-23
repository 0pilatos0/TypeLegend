import { describe, expect, it } from "bun:test";
import { isEmail } from "../../src/regex/isEmail";

describe("isEmail", () => {
	it("should return true for a valid email address", () => {
		const email = "test@example.com";
		const result = isEmail(email);
		expect(result).toBe(true);
	});

	it("should return false for an email address exceeding 254 characters", () => {
		const email = `${"a".repeat(255)}@example.com`;
		const result = isEmail(email);
		expect(result).toBe(false);
	});

	it("should return false for an email address with invalid format", () => {
		const email = "invalid-email";
		const result = isEmail(email);
		expect(result).toBe(false);
	});

	it("should return true for an email address with a valid format", () => {
		const email = "test123@example.co.uk";
		const result = isEmail(email);
		expect(result).toBe(true);
	});
});

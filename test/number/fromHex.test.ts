import { describe, expect, it } from "bun:test";
import { fromHex } from "../../src/number/fromHex";

describe("fromHex", () => {
	it("should convert a hex string to a number", () => {
		const hexString = "FF";
		const result = fromHex(hexString);
		expect(result).toEqual(255);
	});
});

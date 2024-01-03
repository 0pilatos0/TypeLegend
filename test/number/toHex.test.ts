import { expect, describe, it } from "bun:test";
import { toHex } from "../../src/number/toHex";

describe("toHex", () => {
  it("should convert a number to its hexadecimal representation", () => {
    // Test case 1
    const result1 = toHex(10);
    expect(result1).toEqual("a");

    // Test case 2
    const result2 = toHex(255);
    expect(result2).toEqual("ff");

    // Test case 3
    const result3 = toHex(16);
    expect(result3).toEqual("10");

    // Test case 4
    const result4 = toHex(0);
    expect(result4).toEqual("0");

    // Test case 5
    const result5 = toHex(123456789);
    expect(result5).toEqual("75bcd15");

    // Test case 6
    const result6 = toHex(987654321);
    expect(result6).toEqual("3ade68b1");
  });
});

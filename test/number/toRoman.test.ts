import { expect, describe, it } from "bun:test";
import { toRoman } from "../../src/number/toRoman";

describe("toRoman", () => {
  it("should convert 1 to 'I'", () => {
    const input = 1;
    const expectedOutput = "I";
    const result = toRoman(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should convert 4 to 'IV'", () => {
    const input = 4;
    const expectedOutput = "IV";
    const result = toRoman(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should convert 9 to 'IX'", () => {
    const input = 9;
    const expectedOutput = "IX";
    const result = toRoman(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should convert 49 to 'XLIX'", () => {
    const input = 49;
    const expectedOutput = "XLIX";
    const result = toRoman(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should convert 3999 to 'MMMCMXCIX'", () => {
    const input = 3999;
    const expectedOutput = "MMMCMXCIX";
    const result = toRoman(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should throw an error for numbers less than 1", () => {
    const input = 0;
    expect(() => toRoman(input)).toThrow("Number out of range (1-3999)");
  });

  it("should throw an error for numbers greater than 3999", () => {
    const input = 4000;
    expect(() => toRoman(input)).toThrow("Number out of range (1-3999)");
  });
});

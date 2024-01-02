import { expect, describe, it } from "bun:test";
import { sqrt } from "../../src/math/sqrt";

describe("sqrt", () => {
  it("should return the square root of a positive number", () => {
    const result = sqrt(4);
    expect(result).toBe(2);
  });

  it("should return NaN for a negative number", () => {
    const result = sqrt(-4);
    expect(isNaN(result)).toBe(true);
  });

  it("should return 0 for 0", () => {
    const result = sqrt(0);
    expect(result).toBe(0);
  });

  it("should return the square root of a decimal number", () => {
    const result = sqrt(2.25);
    expect(result).toBe(1.5);
  });
});

import { expect, describe, it } from "bun:test";
import { isOdd } from "../../src/number/isOdd";

describe("isOdd", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(9)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(10)).toBe(false);
  });
});

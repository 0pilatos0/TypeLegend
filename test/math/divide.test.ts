import { expect, describe, it } from "bun:test";
import { divide } from "../../src/math/divide";

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(100, 10)).toBe(10);
    expect(divide(1, 3)).toBeCloseTo(0.33333, 5);
  });

  it("should return Infinity if given a zero divisor", () => {
    expect(divide(10, 0)).toBe(Infinity);
    expect(divide(-10, 0)).toBe(-Infinity);
    expect(divide(0, 0)).toBeNaN();
  });
});

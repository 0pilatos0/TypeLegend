import { expect, describe, it } from "bun:test";
import { subtract } from "../../src/math/subtract";

describe("subtract", () => {
  it("should subtract two numbers correctly", () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });

  it("should handle negative numbers correctly", () => {
    const result = subtract(-5, 3);
    expect(result).toBe(-8);
  });

  it("should handle zero correctly", () => {
    const result = subtract(5, 0);
    expect(result).toBe(5);
  });
});

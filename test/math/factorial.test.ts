import { expect, describe, it } from "bun:test";
import { factorial } from "../../src/math/factorial";

describe("factorial", () => {
  it("should return 1 when n is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return the correct factorial value for positive numbers", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});

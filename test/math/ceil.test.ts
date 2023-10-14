import { expect, describe, it } from "bun:test";
import { ceil } from "../../src/math/ceil";

describe("ceil", () => {
  it("should round up to the nearest integer", () => {
    expect(ceil(1.2)).toBe(2);
    expect(ceil(3.8)).toBe(4);
    expect(ceil(-2.3)).toBe(-2);
  });

  it("should round up to the nearest precision", () => {
    expect(ceil(1.2345, 2)).toBe(1.24);
    expect(ceil(3.14159, 3)).toBe(3.142);
    expect(ceil(-2.345, 1)).toBe(-2.3);
  });

  it("should return NaN if given NaN", () => {
    expect(ceil(NaN)).toBeNaN();
  });
});

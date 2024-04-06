import { expect, describe, it } from "bun:test";
import { circumference } from "../../src/math/circumference";

describe("circumference", () => {
  it("should calculate the circumference of a circle with radius 1", () => {
    const radius = 1;
    const expected = 2 * Math.PI;
    expect(circumference(radius)).toBe(expected);
  });

  it("should calculate the circumference of a circle with radius 5", () => {
    const radius = 5;
    const expected = 2 * Math.PI * 5;
    expect(circumference(radius)).toBe(expected);
  });

  it("should calculate the circumference of a circle with radius 10", () => {
    const radius = 10;
    const expected = 2 * Math.PI * 10;
    expect(circumference(radius)).toBe(expected);
  });
});

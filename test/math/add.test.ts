import { expect, describe, it } from "bun:test";
import { add } from "../../src/math/add";

describe("add", () => {
  it("should add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
  });

  it("should add a positive and a negative number", () => {
    expect(add(2, -3)).toBe(-1);
    expect(add(-10, 20)).toBe(10);
  });

  it("should add two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-10, -20)).toBe(-30);
  });

  it("should return 0 if both numbers are 0", () => {
    expect(add(0, 0)).toBe(0);
  });
});

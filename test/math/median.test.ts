import { expect, describe, it } from "bun:test";
import { median } from "../../src/math/median";

describe("median", () => {
  it("should return the median of an odd-length array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(median(arr)).toBe(3);
  });

  it("should return the median of an even-length array", () => {
    const arr = [1, 2, 3, 4];
    expect(median(arr)).toBe(2.5);
  });

  it("should return the median of a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(median(arr)).toBe(3.5);
  });

  it("should return the median of a reverse sorted array", () => {
    const arr = [6, 5, 4, 3, 2, 1];
    expect(median(arr)).toBe(3.5);
  });

  it("should return the median of an array with duplicate values", () => {
    const arr = [1, 2, 2, 3, 4, 5];
    expect(median(arr)).toBe(2.5);
  });
});

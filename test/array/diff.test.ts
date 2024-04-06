import { expect, describe, it } from "bun:test";
import { diff } from "../../src/array/diff";

describe("diff", () => {
  it("should return the difference between two arrays", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    const result = diff(arr1, arr2);
    expect(result).toEqual([1, 2]);
  });

  it("should return an empty array if both arrays are identical", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = diff(arr1, arr2);
    expect(result).toEqual([]);
  });

  it("should return the first array if the second array is empty", () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const result = diff(arr1, arr2);
    expect(result).toEqual(arr1);
  });

  it("should return an empty array if the first array is empty", () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 3];
    const result = diff(arr1, arr2);
    expect(result).toEqual([]);
  });
});

import { expect, describe, it } from "bun:test";
import { union } from "../../src/array/union";

describe("union", () => {
  it("should return the union of two arrays", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    const result = union(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should return the first array if the second array is empty", () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const result = union(arr1, arr2);
    expect(result).toEqual(arr1);
  });

  it("should return the second array if the first array is empty", () => {
    const arr1: number[] = [];
    const arr2 = [1, 2, 3];
    const result = union(arr1, arr2);
    expect(result).toEqual(arr2);
  });

  it("should return an empty array if both arrays are empty", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = union(arr1, arr2);
    expect(result).toEqual([]);
  });
});

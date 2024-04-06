import { expect, describe, it } from "bun:test";
import { zip } from "../../src/array/zip";

describe("zip", () => {
  it("should return an array of tuples with corresponding elements from two arrays", () => {
    const arr1: number[] = [1, 2, 3];
    const arr2: number[] = [4, 5, 6];
    const result = zip(arr1, arr2);
    expect(result).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it("should return an empty array if either of the input arrays is empty", () => {
    const arr1: number[] = [];
    const arr2: number[] = [4, 5, 6];
    const result = zip(arr1, arr2);
    expect(result).toEqual([]);
  });

  it("should return an empty array if both input arrays are empty", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = zip(arr1, arr2);
    expect(result).toEqual([]);
  });

  it("should truncate the longer array if the input arrays have different lengths", () => {
    const arr1: number[] = [1, 2, 3];
    const arr2: number[] = [4, 5];
    const result = zip(arr1, arr2);
    expect(result).toEqual([
      [1, 4],
      [2, 5],
    ]);
  });
});

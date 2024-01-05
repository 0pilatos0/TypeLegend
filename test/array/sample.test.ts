import { expect, describe, it } from "bun:test";
import { sample } from "../../src/array/sample";

describe("sample", () => {
  it("should return an empty array when given an empty array", () => {
    const arr: number[] = [];
    const sampleSize = 3;
    const result = sample(arr, sampleSize);
    expect(result).toEqual([]);
  });

  it("should return an empty array when sample size is 0", () => {
    const arr = [1, 2, 3, 4, 5];
    const sampleSize = 0;
    const result = sample(arr, sampleSize);
    expect(result).toEqual([]);
  });

  it("should return a sample of the specified size", () => {
    const arr = [1, 2, 3, 4, 5];
    const sampleSize = 3;
    const result = sample(arr, sampleSize);
    expect(result.length).toBe(sampleSize);
  });

  it("should return a sample containing elements from the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sampleSize = 3;
    const result = sample(arr, sampleSize);
    result.forEach((element) => {
      expect(arr.includes(element)).toBe(true);
    });
  });

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sampleSize = 3;
    const result = sample(arr, sampleSize);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});

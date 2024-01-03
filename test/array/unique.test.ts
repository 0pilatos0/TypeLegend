import { expect, describe, it } from "bun:test";
import { unique } from "../../src/array/unique";

describe("unique", () => {
  it("should return an array with unique elements", () => {
    const input = [1, 2, 3, 2, 4, 1, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(unique(input)).toEqual(expectedOutput);
  });

  it("should preserve the order of elements", () => {
    const input = [3, 2, 1, 2, 4, 1, 5];
    const expectedOutput = [3, 2, 1, 4, 5];
    expect(unique(input)).toEqual(expectedOutput);
  });

  it("should handle empty arrays", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(unique(input)).toEqual(expectedOutput);
  });

  it("should handle arrays with a single element", () => {
    const input = [42];
    const expectedOutput = [42];
    expect(unique(input)).toEqual(expectedOutput);
  });

  it("should handle arrays with all elements being the same", () => {
    const input = [1, 1, 1, 1, 1];
    const expectedOutput = [1];
    expect(unique(input)).toEqual(expectedOutput);
  });

  it("Should handle both strings and numbers", () => {
    const input = [1, "1", 1, "1", 1, 1, "1", 1];
    const expectedOutput = [1, "1"];
    expect(unique(input)).toEqual(expectedOutput);
  });
});

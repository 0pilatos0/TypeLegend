import { expect, describe, it } from "bun:test";
import { range } from "../../src/array/range";

describe("range", () => {
  it("should return a range of elements from the array", () => {
    const input = [1, 2, 3, 4, 5];
    const start = 1;
    const end = 4;
    const expectedOutput = [2, 3, 4];
    expect(range(input, start, end)).toEqual(expectedOutput);
  });

  it("should return the entire array if no start and end indices are provided", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(range(input)).toEqual(expectedOutput);
  });

  it("should handle an empty array", () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(range(input)).toEqual(expectedOutput);
  });

  it("should handle a start index greater than the array length", () => {
    const input = [1, 2, 3, 4, 5];
    const start = 10;
    const expectedOutput: number[] = [];
    expect(range(input, start)).toEqual(expectedOutput);
  });

  it("should handle an end index greater than the array length", () => {
    const input = [1, 2, 3, 4, 5];
    const end = 10;
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(range(input, 0, end)).toEqual(expectedOutput);
  });
});

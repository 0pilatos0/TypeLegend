import { expect, describe, it } from "bun:test";
import { shuffle } from "../../src/array/shuffle";

describe("shuffle", () => {
  it("should shuffle the elements in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(result).not.toEqual(arr);
    expect(result).toHaveLength(arr.length);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
  });

  it("should return an empty array if the input array is empty", () => {
    const arr: number[] = [];
    const result = shuffle(arr);
    expect(result).toEqual([]);
  });

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    shuffle(arr);
    expect(arr).toEqual(originalArr);
  });
});

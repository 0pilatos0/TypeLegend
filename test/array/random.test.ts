import { expect, describe, it } from "bun:test";
import { random } from "../../src/array/random";

describe("random", () => {
  it("should return a random element from the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = random(arr);
    expect(arr.includes(result)).toBe(true);
  });

  it("should return undefined if the array is empty", () => {
    const arr: number[] = [];
    const result = random(arr);
    expect(result).toBeUndefined();
  });
});

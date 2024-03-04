import { expect, describe, it } from "bun:test";
import { omit } from "../../src/object/omit";

describe("omit", () => {
  it("should return a new object with specified keys omitted", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ["b", "d"];
    const result = omit(obj, keys);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("should not modify the original object", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ["b", "d"];
    omit(obj, keys);
    expect(obj).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it("should return the same object when no keys are specified", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const keys: string[] = [];
    const result = omit(obj, keys);
    expect(result).toBe(obj);
  });

  it("should return an empty object when all keys are specified", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ["a", "b", "c", "d"];
    const result = omit(obj, keys);
    expect(result).toEqual({});
  });
});

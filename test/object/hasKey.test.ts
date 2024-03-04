import { expect, describe, it } from "bun:test";
import { hasKey } from "../../src/object/hasKey";

describe("hasKey", () => {
  it("should return true if the object has the specified key", () => {
    const obj = { name: "John", age: 30 };
    expect(hasKey(obj, "name")).toBe(true);
    expect(hasKey(obj, "age")).toBe(true);
  });

  it("should return false if the object does not have the specified key", () => {
    const obj = { name: "John", age: 30 };
    expect(hasKey(obj, "email")).toBe(false);
    expect(hasKey(obj, "address")).toBe(false);
  });

  it("should return false if the object is empty", () => {
    const obj = {};
    expect(hasKey(obj, "name")).toBe(false);
    expect(hasKey(obj, "age")).toBe(false);
  });
});

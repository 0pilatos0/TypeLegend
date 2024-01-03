import { expect, describe, it } from "bun:test";
import { deepClone } from "../../src/object/deepClone";

describe("deepClone", () => {
  it("should return a deep clone of the object", () => {
    const input = { name: "John", age: 30, hobbies: ["reading", "coding"] };
    const expectedOutput = {
      name: "John",
      age: 30,
      hobbies: ["reading", "coding"],
    };
    const clonedObject = deepClone(input);
    expect(clonedObject).toEqual(expectedOutput);
    expect(clonedObject).not.toBe(input);
    expect(clonedObject.hobbies).not.toBe(input.hobbies);
  });

  it("should handle cloning an empty object", () => {
    const input = {};
    const expectedOutput = {};
    const clonedObject = deepClone(input);
    expect(clonedObject).toEqual(expectedOutput);
    expect(clonedObject).not.toBe(input);
  });

  it("should handle cloning an object with nested objects", () => {
    const input = {
      name: "John",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    };
    const expectedOutput = {
      name: "John",
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    };
    const clonedObject = deepClone(input);
    expect(clonedObject).toEqual(expectedOutput);
    expect(clonedObject).not.toBe(input);
    expect(clonedObject.address).not.toBe(input.address);
  });
});

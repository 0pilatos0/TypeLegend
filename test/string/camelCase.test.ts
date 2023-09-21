import { expect, describe, it } from "bun:test";
import { camelCase } from "../../src";

describe("camelCase", () => {
  it("should convert a string with spaces to camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  it("should convert a string with hyphens to camelCase", () => {
    expect(camelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert a string with underscores to camelCase", () => {
    expect(camelCase("hello_world")).toBe("helloWorld");
  });

  it("should convert a string with mixed separators to camelCase", () => {
    expect(camelCase("hello-world_world")).toBe("helloWorldWorld");
  });

  it("should handle an empty string", () => {
    expect(camelCase("")).toBe("");
  });

  it("should handle a string with only one word", () => {
    expect(camelCase("hello")).toBe("hello");
  });

  it("should handle a string with only one uppercase word", () => {
    expect(camelCase("HELLO")).toBe("hello");
  });
});

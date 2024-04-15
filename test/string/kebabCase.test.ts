import { expect, describe, it } from "bun:test";
import { kebabCase } from "../../src/string/kebabCase";

describe("kebabCase", () => {
  it("should convert camel case string to kebab case", () => {
    const str = "helloWorld";
    expect(kebabCase(str)).toEqual("hello-world");
  });

  it("should convert pascal case string to kebab case", () => {
    const str = "HelloWorld";
    expect(kebabCase(str)).toEqual("hello-world");
  });

  it("should convert snake case string to kebab case", () => {
    const str = "hello_world";
    expect(kebabCase(str)).toEqual("hello-world");
  });

  it("should convert space separated string to kebab case", () => {
    const str = "hello world";
    expect(kebabCase(str)).toEqual("hello-world");
  });

  it("should convert mixed case string to kebab case", () => {
    const str = "HelloWorld_snakeCase";
    expect(kebabCase(str)).toEqual("hello-world-snake-case");
  });

  it("should convert string with special characters to kebab case", () => {
    const str = "hello@world#123";
    expect(kebabCase(str)).toEqual("hello-world-123");
  });
});

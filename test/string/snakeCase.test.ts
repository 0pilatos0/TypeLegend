import { expect, describe, it } from "bun:test";
import { snakeCase } from "../../src/string/snakeCase";

describe("snakeCase", () => {
  it("should convert camel case to snake case", () => {
    const input = "helloWorld";
    const expected = "hello_world";
    expect(snakeCase(input)).toEqual(expected);
  });

  it("should convert kebab case to snake case", () => {
    const input = "hello-world";
    const expected = "hello_world";
    expect(snakeCase(input)).toEqual(expected);
  });

  it("should convert pascal case to snake case", () => {
    const input = "HelloWorld";
    const expected = "hello_world";
    expect(snakeCase(input)).toEqual(expected);
  });

  it("should convert space separated words to snake case", () => {
    const input = "hello world";
    const expected = "hello_world";
    expect(snakeCase(input)).toEqual(expected);
  });

  it("should convert mixed case to snake case", () => {
    const input = "HelloWorld-fooBar";
    const expected = "hello_world_foo_bar";
    expect(snakeCase(input)).toEqual(expected);
  });

  it("should convert special characters to snake case", () => {
    const input = "hello!@#$%^&*()world";
    const expected = "hello_world";
    expect(snakeCase(input)).toEqual(expected);
  });
});

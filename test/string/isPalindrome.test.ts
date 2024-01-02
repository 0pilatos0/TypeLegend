import { expect, describe, it } from "bun:test";
import { isPalindrome } from "../../src/string/isPalindrome";

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    const str = "racecar";
    expect(isPalindrome(str)).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    const str = "hello";
    expect(isPalindrome(str)).toBe(false);
  });

  it("should return true for an empty string", () => {
    const str = "";
    expect(isPalindrome(str)).toBe(true);
  });

  it("should return true for a single character string", () => {
    const str = "a";
    expect(isPalindrome(str)).toBe(true);
  });

  it("should return true for a string with special characters", () => {
    const str = "!@#$%&^*^&%$#@!";
    expect(isPalindrome(str)).toBe(true);
  });
});

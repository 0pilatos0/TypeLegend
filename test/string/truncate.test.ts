import { expect, describe, it } from "bun:test";
import { truncate } from "../../src/string/truncate";

describe("truncate", () => {
  it("should truncate a string with default ending", () => {
    const str = "Lorem ipsum dolor sit amet";
    const length = 13;
    expect(truncate(str, length)).toBe("Lorem ipsu...");
  });

  it("should truncate a string with custom ending", () => {
    const str = "Lorem ipsum dolor sit amet";
    const length = 13;
    const ending = "***";
    expect(truncate(str, length, ending)).toBe("Lorem ipsu***");
  });

  it("should not truncate a string if length is greater than or equal to string length", () => {
    const str = "Lorem ipsum dolor sit amet";
    const length = 30;
    expect(truncate(str, length)).toBe(str);
  });
});

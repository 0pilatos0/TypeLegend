import { expect, describe, it } from "bun:test";
import { toOrdinal } from "../../src/number/toOrdinal";

describe("toOrdinal", () => {
  it("should return '1st' for input 1", () => {
    const result = toOrdinal(1);
    expect(result).toBe("1st");
  });

  it("should return '2nd' for input 2", () => {
    const result = toOrdinal(2);
    expect(result).toBe("2nd");
  });

  it("should return '3rd' for input 3", () => {
    const result = toOrdinal(3);
    expect(result).toBe("3rd");
  });

  it("should return '4th' for input 4", () => {
    const result = toOrdinal(4);
    expect(result).toBe("4th");
  });
});

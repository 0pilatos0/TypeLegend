import { expect, describe, it } from "bun:test";
import { ratio } from "../../src/math/ratio";

describe("ratio", () => {
  it("should return the correct ratio when a is smaller than b", () => {
    const a = 5;
    const b = 10;
    expect(ratio(a, b)).toBe(0.5);
  });

  it("should return the correct ratio when a is greater than b", () => {
    const a = 10;
    const b = 5;
    expect(ratio(a, b)).toBe(2);
  });

  it("should return 1 when a is equal to b", () => {
    const a = 5;
    const b = 5;
    expect(ratio(a, b)).toBe(1);
  });
});

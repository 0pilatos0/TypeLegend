import { expect, describe, it } from "bun:test";
import { areaTriangle } from "../../src/math/areaTriangle";

describe("areaTriangle", () => {
  it("should calculate the area of a triangle", () => {
    const base = 5;
    const height = 8;
    const expectedArea = 0.5 * base * height;
    expect(areaTriangle(base, height)).toBe(expectedArea);
  });

  it("should return 0 if either base or height is 0", () => {
    const base = 0;
    const height = 10;
    expect(areaTriangle(base, height)).toBe(0);

    const base2 = 5;
    const height2 = 0;
    expect(areaTriangle(base2, height2)).toBe(0);
  });

  it("should return 0 if both base and height are 0", () => {
    const base = 0;
    const height = 0;
    expect(areaTriangle(base, height)).toBe(0);
  });
});

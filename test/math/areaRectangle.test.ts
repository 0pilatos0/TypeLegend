import { expect, describe, it } from "bun:test";
import { areaRectangle } from "../../src/math/areaRectangle";

describe("areaRectangle", () => {
  it("should calculate the area of a rectangle", () => {
    const length = 5;
    const width = 3;
    const expectedArea = 15;
    expect(areaRectangle(length, width)).toBe(expectedArea);
  });

  it("should return 0 if either length or width is 0", () => {
    const length = 0;
    const width = 7;
    expect(areaRectangle(length, width)).toBe(0);

    const length2 = 10;
    const width2 = 0;
    expect(areaRectangle(length2, width2)).toBe(0);
  });

  it("should return NaN if either length or width is negative", () => {
    const length = -5;
    const width = 4;
    expect(areaRectangle(length, width)).toBeNaN();

    const length2 = 8;
    const width2 = -2;
    expect(areaRectangle(length2, width2)).toBeNaN();
  });
});

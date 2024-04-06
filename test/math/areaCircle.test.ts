import { expect, describe, it } from "bun:test";
import { areaCircle } from "../../src/math/areaCircle";

describe("areaCircle", () => {
  it("should calculate the area of a circle with a given radius", () => {
    const radius = 5;
    const expectedArea = Math.PI * radius ** 2;
    const calculatedArea = areaCircle(radius);
    expect(calculatedArea).toBe(expectedArea);
  });

  it("should return 0 when the radius is 0", () => {
    const radius = 0;
    const expectedArea = 0;
    const calculatedArea = areaCircle(radius);
    expect(calculatedArea).toBe(expectedArea);
  });

  it("should return NaN when the radius is negative", () => {
    const radius = -5;
    const calculatedArea = areaCircle(radius);
    expect(calculatedArea).toBeNaN();
  });
});

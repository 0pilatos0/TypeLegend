import { expect, describe, it } from "bun:test";
import { lerp } from "../../src/math/lerp";

describe("lerp", () => {
  it("should interpolate correctly when t is 0", () => {
    const from = 0;
    const to = 100;
    const t = 0;
    expect(lerp(from, to, t)).toBe(from);
  });

  it("should interpolate correctly when t is 1", () => {
    const from = 0;
    const to = 100;
    const t = 1;
    expect(lerp(from, to, t)).toBe(to);
  });

  it("should interpolate correctly when t is between 0 and 1", () => {
    const from = 0;
    const to = 100;
    const t = 0.5;
    const expected = (from + to) / 2;
    expect(lerp(from, to, t)).toBe(expected);
  });
});

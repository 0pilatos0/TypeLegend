import { currentDate } from "../../src/date/currentDate";
import { expect, describe, it } from "bun:test";

describe("currentDate", () => {
  it("should return the current date and time", () => {
    const now = new Date();
    const result = currentDate();
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeCloseTo(now.getTime(), -2);
  });
});

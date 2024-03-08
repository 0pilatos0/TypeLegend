import { expect, describe, it } from "bun:test";
import { isWeekend } from "../../src/date/isWeekend";

describe("isWeekend", () => {
  it("should return true if the date is a Sunday", () => {
    const date = new Date("2022-01-02"); // Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return true if the date is a Saturday", () => {
    const date = new Date("2022-01-01"); // Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("should return false if the date is not a weekend day", () => {
    const date = new Date("2022-01-03"); // Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});

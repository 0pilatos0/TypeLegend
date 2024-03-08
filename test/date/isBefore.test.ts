import { expect, describe, it } from "bun:test";
import { isBefore } from "../../src/date/isBefore";

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-01-02");
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    const date1 = new Date("2022-01-02");
    const date2 = new Date("2022-01-01");
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the first date is the same as the second date", () => {
    const date1 = new Date("2022-01-01");
    const date2 = new Date("2022-01-01");
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });
});

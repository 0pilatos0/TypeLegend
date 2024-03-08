import { expect, describe, it } from "bun:test";
import { addMonths } from "../../src/date/addMonths";

describe("addMonths", () => {
  it("should add the specified number of months to the date", () => {
    const date = new Date("2022-01-01");
    const monthsToAdd = 3;
    const expectedDate = new Date("2022-04-01");
    const result = addMonths(date, monthsToAdd);
    expect(result).toEqual(expectedDate);
  });

  it("should handle negative number of months correctly", () => {
    const date = new Date("2022-01-01");
    const monthsToAdd = -2;
    const expectedDate = new Date("2021-11-01");
    const result = addMonths(date, monthsToAdd);
    expect(result).toEqual(expectedDate);
  });

  it("should not modify the original date", () => {
    const date = new Date("2022-01-01");
    const monthsToAdd = 5;
    const result = addMonths(date, monthsToAdd);
    expect(result).not.toBe(date);
  });
});

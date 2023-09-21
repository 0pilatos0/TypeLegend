import { expect, describe, it } from "bun:test";
import { currentDayName } from "../../src/date/currentDayName";

describe("currentDayName", () => {
  it("should return the name of the current day of the week", () => {
    const today = new Date();
    const day = today.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    expect(currentDayName()).toEqual(days[day]);
  });
});

import { expect, describe, it } from "bun:test";
import { fromBinary } from "../../src/number/fromBinary";

describe("fromBinary", () => {
  it("should convert a binary string to a number", () => {
    const binaryString = "101010";
    const expectedNumber = 42;

    const result = fromBinary(binaryString);

    expect(result).toEqual(expectedNumber);
  });
});

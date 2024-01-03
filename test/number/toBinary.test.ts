import { expect, describe, it } from "bun:test";
import { toBinary } from "../../src/number/toBinary";

describe("toBinary", () => {
  it("should convert decimal numbers to binary", () => {
    // Test case 1: Convert 0 to binary
    const result1 = toBinary(0);
    expect(result1).toEqual("0");

    // Test case 2: Convert positive numbers to binary
    const result2 = toBinary(5);
    expect(result2).toEqual("101");

    const result3 = toBinary(10);
    expect(result3).toEqual("1010");

    const result4 = toBinary(15);
    expect(result4).toEqual("1111");

    // Test case 3: Convert negative numbers to binary
    const result5 = toBinary(-5);
    expect(result5).toEqual("-101");

    const result6 = toBinary(-10);
    expect(result6).toEqual("-1010");

    const result7 = toBinary(-15);
    expect(result7).toEqual("-1111");
  });
});

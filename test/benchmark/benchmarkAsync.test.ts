import { expect, describe, it } from "bun:test";
import { benchmarkAsync } from "../../src/benchmark/benchmarkAsync";

describe("benchmarkAsync", () => {
  it("should measure the execution time of an asynchronous function", async () => {
    const fn = async () => {
      setTimeout(() => {}, 1000);
    };

    const time = await benchmarkAsync(fn);
    expect(time).toBeGreaterThan(0);
  });

  it("should measure the execution time of an asynchronous function with arguments", async () => {
    const fn = async (a: number, b: number) => {
      setTimeout(() => {}, 1000);
    };

    const time = await benchmarkAsync(fn, 5, 10);
    expect(time).toBeGreaterThan(0);
  });
});

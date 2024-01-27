import { expect, describe, it } from "bun:test";
import { benchmark } from "../../src/benchmark/benchmark";

describe("benchmark", () => {
  it("should measure the execution time of a function", () => {
    const fn = () => {
      // Your function logic here
    };

    const time = benchmark(fn);
    expect(time).toBeGreaterThan(0);
  });

  it("should measure the execution time of a function with arguments", () => {
    const fn = (a: number, b: number) => {
      // Your function logic here
    };

    const time = benchmark(fn, 5, 10);
    expect(time).toBeGreaterThan(0);
  });
});

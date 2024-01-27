import { describe, expect, it } from "bun:test";
import { benchmark } from "../../src/benchmark/benchmark";

describe("benchmark", () => {
  it("should measure the execution time of a function", () => {
    // Test case 1: Measure the execution time of a simple function
    const fn1 = () => {
      // Some code to be measured
    };
    const result1 = benchmark(fn1);
    expect(result1.total).toBeGreaterThan(0);
    expect(result1.average).toBeGreaterThan(0);

    // Test case 2: Measure the execution time of a function with arguments
    const fn2 = (a: number, b: number) => {
      // Some code to be measured
    };
    const result2 = benchmark(fn2, 10, true, 5, 10);
    expect(result2.total).toBeGreaterThan(0);
    expect(result2.average).toBeGreaterThan(0);

    // Test case 3: Measure the execution time of a function without logging
    const fn3 = () => {
      // Some code to be measured
    };
    const result3 = benchmark(fn3, 5, false);
    expect(result3.total).toBeGreaterThan(0);
    expect(result3.average).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from "bun:test";
import { benchmarkIterations } from "../../src/benchmark/benchmarkIterations";

describe("benchmarkIterations", () => {
	it("should measure the execution time of a function for a given number of iterations", () => {
		const fn = () => {
			// Your function logic here
		};

		const iterations = 100;
		const time = benchmarkIterations(fn, iterations);
		expect(time).toBeGreaterThan(0);
	});

	it("should measure the execution time of a function with arguments for a given number of iterations", () => {
		const fn = (a: number, b: number) => {
			// Your function logic here
		};

		const iterations = 100;
		const time = benchmarkIterations(fn, iterations, 5, 10);
		expect(time).toBeGreaterThan(0);
	});
});

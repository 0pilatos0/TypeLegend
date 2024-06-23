import { describe, expect, it, jest } from "bun:test";
import { memoize } from "../../src/function/memoize";

describe("memoize", () => {
	it("should memoize the result of a function", () => {
		const add = (a: number, b: number) => {
			console.log("Calculating sum...");
			return a + b;
		};

		const mockedAdd = jest.fn(add);
		const memoizedAdd = memoize(mockedAdd);

		// First call
		const result1 = memoizedAdd(2, 3);
		expect(result1).toEqual(5);

		// Second call with the same arguments
		const result2 = memoizedAdd(2, 3);
		expect(result2).toEqual(5);

		// Third call with different arguments
		const result3 = memoizedAdd(4, 5);
		expect(result3).toEqual(9);

		// Fourth call with the same arguments as the third call
		const result4 = memoizedAdd(4, 5);
		expect(result4).toEqual(9);

		// The function should have been called only twice
		expect(mockedAdd).toHaveBeenCalledTimes(2);
	});
});

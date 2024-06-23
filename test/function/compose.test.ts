import { describe, expect, it } from "bun:test";
import { compose } from "../../src/function/compose";

describe("compose", () => {
	it("should return the input value when no functions are provided", () => {
		const input = 5;
		const result = compose()(input);
		expect(result).toEqual(input);
	});

	it("should apply the functions in reverse order", () => {
		const addOne = (x: number) => x + 1;
		const double = (x: number) => x * 2;
		const subtractThree = (x: number) => x - 3;
		const input = 5;
		const expectedOutput = subtractThree(double(addOne(input)));
		const result = compose(subtractThree, double, addOne)(input);
		expect(result).toEqual(expectedOutput);
	});

	it("should work with functions of different types", () => {
		const toUpperCase = (str: string[]) => str.map((s) => s.toUpperCase());
		const reverse = (arr: string[]) => arr.reverse();
		const input = ["hello", "world"];
		const expectedOutput = reverse(toUpperCase(input));
		const result = compose(reverse, toUpperCase)(input);
		expect(result).toEqual(expectedOutput);
	});
});

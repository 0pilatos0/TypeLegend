import { describe, expect, it } from "bun:test";
import { curry } from "../../src/function/curry";

describe("curry", () => {
	it("should return a curried function", () => {
		const add = (a: number, b: number) => a + b;
		const curriedAdd = curry(add);
		expect(typeof curriedAdd).toEqual("function");
	});

	it("should return the correct result when all arguments are provided", () => {
		const add = (a: number, b: number) => a + b;
		const curriedAdd = curry(add);
		const result = curriedAdd(2)(3);
		expect(result).toEqual(5);
	});

	it("should return a curried function when some arguments are provided", () => {
		const add = (a: number, b: number) => a + b;
		const curriedAdd = curry(add);
		const curriedAdd2 = curriedAdd(2);
		expect(typeof curriedAdd2).toEqual("function");
	});

	it("should return the correct result when all arguments are provided in multiple steps", () => {
		const multiply = (a: number, b: number, c: number) => a * b * c;
		const curriedMultiply = curry(multiply);
		const result = curriedMultiply(2)(3)(4);
		expect(result).toEqual(24);
	});

	it("should return the correct result when some arguments are provided in multiple steps", () => {
		const multiply = (a: number, b: number, c: number) => a * b * c;
		const curriedMultiply = curry(multiply);
		const curriedMultiply2 = curriedMultiply(2)(3);
		const result = curriedMultiply2(4);
		expect(result).toEqual(24);
	});
});

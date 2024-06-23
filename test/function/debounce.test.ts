import { describe, expect, it } from "bun:test";
import { debounce } from "../../src/function/debounce";

describe("debounce", () => {
	it("should debounce the function call", () => {
		let count = 0;
		const increment = () => {
			count++;
		};
		const debouncedIncrement = debounce(increment, 100);

		debouncedIncrement();
		debouncedIncrement();
		debouncedIncrement();

		// The function should only be called once after the debounce time has passed
		expect(count).toEqual(0);

		// Wait for the debounce time to pass
		setTimeout(() => {
			expect(count).toEqual(1);
		}, 200);
	});

	// it("should debounce the function call with arguments", () => {
	// 	let result = "";
	// 	const append = (text: string) => {
	// 		result += text;
	// 	};
	// 	const debouncedAppend = debounce(append, 100);

	// 	debouncedAppend("Hello");
	// 	debouncedAppend(" ");
	// 	debouncedAppend("World");

	// 	// The function should only be called once after the debounce time has passed
	// 	expect(result).toEqual("");

	// 	// Wait for the debounce time to pass
	// 	setTimeout(() => {
	// 		expect(result).toEqual("Hello World");
	// 	}, 200);
	// });
});

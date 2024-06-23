import { describe, expect, it } from "bun:test";
import { throttle } from "../../src/function/throttle";

describe("throttle", () => {
	it("should throttle function calls to once every 1000ms", () => {
		let count = 0;
		const increment = () => {
			count++;
		};
		const throttledIncrement = throttle(increment, 1000);

		// Call the throttled function multiple times within the throttle limit
		throttledIncrement();
		throttledIncrement();
		throttledIncrement();

		// Wait for the throttle limit to pass
		setTimeout(() => {
			throttledIncrement();
			throttledIncrement();
			throttledIncrement();
		}, 1500);

		// Wait for the throttle limit to pass again
		setTimeout(() => {
			throttledIncrement();
			throttledIncrement();
			throttledIncrement();
		}, 3000);

		// Check the count after enough time has passed
		setTimeout(() => {
			expect(count).toEqual(2);
		}, 4000);
	});

	it("should throttle function calls to once every 500ms", () => {
		let count = 0;
		const decrement = () => {
			count--;
		};
		const throttledDecrement = throttle(decrement, 500);

		// Call the throttled function multiple times within the throttle limit
		throttledDecrement();
		throttledDecrement();
		throttledDecrement();

		// Wait for the throttle limit to pass
		setTimeout(() => {
			throttledDecrement();
			throttledDecrement();
			throttledDecrement();
		}, 1000);

		// Wait for the throttle limit to pass again
		setTimeout(() => {
			throttledDecrement();
			throttledDecrement();
			throttledDecrement();
		}, 2000);

		// Check the count after enough time has passed
		setTimeout(() => {
			expect(count).toEqual(-2);
		}, 3000);
	});
});

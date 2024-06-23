import { describe, expect, it } from "bun:test";
import { volumeSphere } from "../../src/math/volumeSphere";

describe("volumeSphere", () => {
	it("should calculate the volume of a sphere with radius 1", () => {
		const radius = 1;
		const expectedVolume = (4 / 3) * Math.PI;
		expect(volumeSphere(radius)).toBe(expectedVolume);
	});

	it("should calculate the volume of a sphere with radius 5", () => {
		const radius = 5;
		const expectedVolume = (4 / 3) * Math.PI * 5 ** 3;
		expect(volumeSphere(radius)).toBe(expectedVolume);
	});

	it("should calculate the volume of a sphere with radius 0", () => {
		const radius = 0;
		const expectedVolume = 0;
		expect(volumeSphere(radius)).toBe(expectedVolume);
	});
});

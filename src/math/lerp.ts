/**
 * Linearly interpolates between two numbers.
 * @param from - The starting value.
 * @param to - The ending value.
 * @param t - The interpolation factor (between 0 and 1).
 * @returns The interpolated value.
 */
export function lerp(from: number, to: number, t: number): number {
	return from + (to - from) * t;
}

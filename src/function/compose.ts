/**
 * Composes multiple functions into a single function.
 *
 * @template T - The type of the argument and return value.
 * @param {...((arg: T) => T)[]} fns - The functions to compose.
 * @returns {(arg: T) => T} - The composed function.
 */
export function compose<T>(...fns: ((arg: T) => T)[]): (arg: T) => T {
	return (x: T): T => fns.reduceRight((v, f) => f(v), x);
}

/**
 * Returns an array of keys from the given object.
 *
 * @template T - The type of the object.
 * @param obj - The object to retrieve keys from.
 * @returns An array of keys from the object.
 */
export function keys<T extends object>(obj: T): (keyof T)[] {
	return [
		...Object.keys(obj),
		...Object.getOwnPropertySymbols(obj),
	] as (keyof T)[];
}

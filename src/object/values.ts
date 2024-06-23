/**
 * Returns an array of the values of an object.
 *
 * @template T - The type of the object.
 * @param obj - The object to extract values from.
 * @returns An array containing the values of the object.
 */
export function values<T extends object>(obj: T): T[keyof T][] {
	return Object.values(obj);
}

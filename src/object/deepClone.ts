/**
 * Creates a deep clone of an object.
 *
 * @param obj - The object to be cloned.
 * @returns A deep clone of the object.
 */
export function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

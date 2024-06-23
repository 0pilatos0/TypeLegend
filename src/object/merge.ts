/**
 * Merges two objects together.
 * @template T - The type of the first object.
 * @template U - The type of the second object.
 * @param {T} obj1 - The first object to merge.
 * @param {U} obj2 - The second object to merge.
 * @returns {T & U} - The merged object.
 */
export function merge<T extends object, U extends object>(
	obj1: T,
	obj2: U,
): T & U {
	return { ...obj1, ...obj2 };
}

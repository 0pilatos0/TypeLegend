/**
 * Truncates a string to a specified length and appends an optional ending.
 * @param str The string to truncate.
 * @param length The maximum length of the truncated string.
 * @param ending The optional ending to append to the truncated string. Default is "...".
 * @returns The truncated string.
 */
export function truncate(str: string, length: number, ending = "..."): string {
	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	}
	return str;
}

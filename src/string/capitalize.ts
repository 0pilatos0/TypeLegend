/**
 * Capitalizes the first letter of a string and makes the rest of the string lowercase.
 * @param str - The string to be capitalized.
 * @returns The capitalized string.
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export { capitalize };

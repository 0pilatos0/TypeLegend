/**
 * Converts a string to snake case.
 * Snake case is a naming convention where each space or non-alphanumeric character is replaced with an underscore,
 * and each uppercase letter is preceded by an underscore and converted to lowercase.
 *
 * @param str - The string to convert to snake case.
 * @returns The snake case representation of the input string.
 */
export function snakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\W+/g, "_")
    .toLowerCase();
}

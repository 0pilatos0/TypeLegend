/**
 * Returns an array of all matches of a regular expression in a string.
 *
 * @template T - The type of the matched strings.
 * @param {string} str - The input string to search for matches.
 * @param {RegExp} regex - The regular expression to match against the input string.
 * @returns {T[]} - An array of matched strings.
 */
export function matchAll<T extends string>(str: string, regex: RegExp): T[] {
  const matches = [];
  let match;
  while ((match = regex.exec(str)) !== null) {
    matches.push(match[0] as T);
  }
  return matches;
}

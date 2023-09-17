/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function camelCase(str: string): string {
  /**
   * Replaces non-letter characters with camelCase formatting.
   *
   * @param {string} word - The matched word or character.
   * @param {number} index - The index of the matched word or character.
   * @returns {string} The replacement for the matched word or character.
   */
  function camelCaseReplace(word: string, index: number): string {
    if (index === 0) {
      return word.toLowerCase();
    }
    if (!RegExp(/[a-zA-Z]/).exec(word)) {
      return "";
    }
    return word.toUpperCase().replace(/[^a-zA-Z]/g, "");
  }

  if (
    str.indexOf(" ") === -1 &&
    str.indexOf("-") === -1 &&
    str.indexOf("_") === -1
  ) {
    return str.toLowerCase();
  }

  return str.replace(/[\s_-]+(\w)/g, camelCaseReplace).replace(/\s+/g, "");
}

export { camelCase };

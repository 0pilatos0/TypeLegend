
import { capitalize } from "./capitalize";
import { countOccurrences } from "./countOccurrences";
import { camelCase } from "./camelCase";
import { isPalindrome } from "./isPalindrome";
import { reverse } from "./reverse";
import { truncate } from "./truncate";

export class StringUtils {
  static capitalize: typeof capitalize = capitalize;
  static countOccurrences: typeof countOccurrences = countOccurrences;
  static camelCase: typeof camelCase = camelCase;
  static isPalindrome: typeof isPalindrome = isPalindrome;
  static reverse: typeof reverse = reverse;
  static truncate: typeof truncate = truncate;
}

export { capitalize } from "./capitalize";
export { countOccurrences } from "./countOccurrences";
export { camelCase } from "./camelCase";
export { isPalindrome } from "./isPalindrome";
export { reverse } from "./reverse";
export { truncate } from "./truncate";


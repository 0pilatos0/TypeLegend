
import { capitalize } from "./capitalize";
import { camelCase } from "./camelCase";
import { isPalindrome } from "./isPalindrome";
import { reverse } from "./reverse";

export class StringUtils {
  static capitalize: typeof capitalize = capitalize;
  static camelCase: typeof camelCase = camelCase;
  static isPalindrome: typeof isPalindrome = isPalindrome;
  static reverse: typeof reverse = reverse;
}

export { capitalize } from "./capitalize";
export { camelCase } from "./camelCase";
export { isPalindrome } from "./isPalindrome";
export { reverse } from "./reverse";


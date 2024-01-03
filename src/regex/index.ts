
import { isEmail } from "./isEmail";
import { matchAll } from "./matchAll";

export class RegexUtils {
  static isEmail: typeof isEmail = isEmail;
  static matchAll: typeof matchAll = matchAll;
}

export { isEmail } from "./isEmail";
export { matchAll } from "./matchAll";


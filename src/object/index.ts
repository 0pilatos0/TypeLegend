
import { deepClone } from "./deepClone";
import { pick } from "./pick";
import { keys } from "./keys";
import { values } from "./values";
import { merge } from "./merge";

export class ObjectUtils {
  static deepClone: typeof deepClone = deepClone;
  static pick: typeof pick = pick;
  static keys: typeof keys = keys;
  static values: typeof values = values;
  static merge: typeof merge = merge;
}

export { deepClone } from "./deepClone";
export { pick } from "./pick";
export { keys } from "./keys";
export { values } from "./values";
export { merge } from "./merge";


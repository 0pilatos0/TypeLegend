
import { deepClone } from "./deepClone";
import { pick } from "./pick";
import { keys } from "./keys";
import { hasKey } from "./hasKey";
import { values } from "./values";
import { merge } from "./merge";
import { omit } from "./omit";

export class ObjectUtils {
  static deepClone: typeof deepClone = deepClone;
  static pick: typeof pick = pick;
  static keys: typeof keys = keys;
  static hasKey: typeof hasKey = hasKey;
  static values: typeof values = values;
  static merge: typeof merge = merge;
  static omit: typeof omit = omit;
}

export { deepClone } from "./deepClone";
export { pick } from "./pick";
export { keys } from "./keys";
export { hasKey } from "./hasKey";
export { values } from "./values";
export { merge } from "./merge";
export { omit } from "./omit";

